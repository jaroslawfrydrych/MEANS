import {
    ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable,
    Injector
} from '@angular/core';
import {ToastComponent} from './toast.component';
import {ToastTypes} from './toast-types.enum';

@Injectable(<any>{
    providedIn: 'root'
})
export class ToastService {
    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private applicationRef: ApplicationRef,
                private injector: Injector) {
    }

    public showToast(message: string, type?: ToastTypes) {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(ToastComponent)
            .create(this.injector);

        this.applicationRef.attachView(componentRef.hostView);

        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        document.body.appendChild(domElem);
        componentRef.instance.message = message;
        componentRef.instance.type = type;

        const closeToastSub = componentRef.instance.closeToast$
            .subscribe(() => {
                this.applicationRef.detachView(componentRef.hostView);
                componentRef.destroy();
                closeToastSub.unsubscribe();
            });
    }
}
