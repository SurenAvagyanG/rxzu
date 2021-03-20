import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Host,
  Inject,
  IterableDiffers,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  DefaultNodeComponent,
  MODEL,
  FactoryService,
  RxZuDiagramComponent,
} from '@rxzu/angular';
import { GHNodeModel } from '../../models';

@Component({
  selector: 'rxzu-gh-workflow-node',
  templateUrl: './gh-workflow-node.component.html',
  styleUrls: ['./gh-workflow-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GHWorkflowNodeComponent
  extends DefaultNodeComponent
  implements OnInit {
  @ViewChild('portsLayer', { read: ViewContainerRef, static: true })
  portsLayer!: ViewContainerRef;

  constructor(
    @Host() @Inject(MODEL) public model: GHNodeModel,
    factory: FactoryService,
    diagram: RxZuDiagramComponent,
    elRef: ElementRef,
    renderer: Renderer2,
    iterableDiffers: IterableDiffers
  ) {
    super(model, factory, diagram, elRef, renderer, iterableDiffers);
  }
}