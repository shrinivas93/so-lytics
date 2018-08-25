import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { DataService } from '../../services/data.service';
import { SoResponse } from '../../models/so-response.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId: string;
  userIdDisplay: string;
  user: User;

  constructor(
    private searchService: SearchService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.searchService.getSearchText().subscribe(userId => {
      this.dataService.getUserData(userId).subscribe((data: SoResponse) => {
        this.user = data.items[0];
      });
    });
  }

  search() {
    this.searchService.emitSearchText(this.userId);
  }
}
