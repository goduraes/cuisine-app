import { Component, OnInit } from '@angular/core';
import { LoadingService } from './shared/components/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean = false;

  constructor(public loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.eventLoading.subscribe((res: boolean) => setTimeout(() => this.loading = res));
  }

}
