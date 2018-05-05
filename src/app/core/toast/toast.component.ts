import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Observable, ReplaySubject, Subscription, timer} from 'rxjs';
import {ToastTypes} from './toast-types.enum';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription = new Subscription();
    private closeToastSubject: ReplaySubject<null> = new ReplaySubject<null>(1);
    public closeToast$: Observable<null> = this.closeToastSubject.asObservable();
    public message: string = null;
    public type: ToastTypes = ToastTypes.Info;
    public lifeTimeSeconds: number = 3;
    @HostBinding('class.animated')
    @HostBinding('class.fadeInUp') animationIn: boolean = true;
    @HostBinding('class.fadeOutDown') animationOut: boolean = false;

    constructor() {
    }

    ngOnInit() {
        const lifeTimeTimer = timer(this.lifeTimeSeconds * 1000)
            .subscribe(() => {
                this.closeToast();
            });

        this.subscriptions.add(lifeTimeTimer);
    }

    public closeToast() {
        this.animationOut = true;

        // TODO better handle animation out
        const closeToastAnimationTimer = timer(1000)
            .subscribe(() => {
                this.closeToastSubject.next(null);
            });

        this.subscriptions.add(closeToastAnimationTimer);
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

}
