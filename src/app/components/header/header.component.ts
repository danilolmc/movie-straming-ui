import { Component, OnInit } from '@angular/core';
import { faSearch, faPlay } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchIcon = faSearch;
  playIcon = faPlay;

  constructor() { }

  ngOnInit(): void {
  }

}
