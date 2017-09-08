import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { DetailService } from '../core/detail.service';
import { Detail } from '../core/detail.model';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {
  @ViewChild('sidenav') sidenav;
  
  teamItems: Detail[];

  constructor(private detailService: DetailService, private _elRef: ElementRef) { }

  ngOnInit() {
    this.teamItems = this.detailService.getTreatmentItems();
    this._elRef.nativeElement.width = 100;
  }

  ngAfterViewInit() {
    console.log(window.innerWidth);
    if(window.innerWidth < 800) {
      this.sidenav.mode = 'over';
      this.sidenav.disableClose = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event.target.innerWidth);
    if(event.target.innerWidth < 800) {
      this.sidenav.close();
      this.sidenav.mode = 'over';
      this.sidenav.disableClose = false;
    } else {
      this.sidenav.open();
      this.sidenav.mode = 'push';
      this.sidenav.disableClose = true;
    }
  }

  navigated() {
    if(this.sidenav.mode == 'over') {
      this.sidenav.close();
    }
  }
}
