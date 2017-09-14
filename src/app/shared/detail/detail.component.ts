import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ParallaxConfig } from 'ngx-parallax';
import { DetailService } from '../../core/detail.service';
import { Detail } from '../../core/detail.model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail: Detail;
  constructor(private route: ActivatedRoute, private detailService: DetailService) {  }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => this.detail = this.detailService.getDetail(params.get('detailKey')));
  }
}