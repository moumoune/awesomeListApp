import { Component, OnDestroy, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/core/services/layout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'al-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit, OnDestroy {
  isSidenavCollapsed: boolean;
  private subscription: Subscription;
  
  constructor(private layoutService: LayoutService) { }
  
  ngOnInit() {
   this.subscription = 
    this.layoutService.isSidenavCollapsed$.subscribe(
     isSidenavCollapsed => this.isSidenavCollapsed = isSidenavCollapsed
    );
  }
  
  ngOnDestroy() {
   this.subscription.unsubscribe();
  }
 }