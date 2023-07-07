import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export type QueryParams = {
  key: string | number,
  value: string | number,
}

@Component({
  selector: 'app-params-example',
  templateUrl: './params-example.component.html',
  styleUrls: ['./params-example.component.scss'],
})

export class ParamsExampleComponent implements OnInit {
  urlParam: any = '';
  altParam: any = '';
  queryParams: QueryParams[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // THIS IS USED TO GET THE URL PARAMS
    this.urlParam = this.route.snapshot.paramMap.get('urlParam') || '';
    this.altParam = this.route.snapshot.paramMap.get('altParam') || '';
    // THIS IS USED TO GET THE QUERY PARAMS. WE NEED TO SUBSCRIBE TO IT TO GET ALL THE VALUES WHEN IT CHANGES
    this.route.queryParams.subscribe((params) => {
      this.queryParams = Object.keys(params).map((key) => ({
        key: key,
        value: params[key],
      }));
    });
  }
}
