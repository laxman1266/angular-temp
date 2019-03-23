import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RentalService } from '../shared/rental.service';
@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
rentalId;
rentalDetailData;
  constructor(private route: ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {
    this.route.params.subscribe(
     (params) => {
       this.rentalId = params['rentalId'];
       this.rentalService.getRentalById(this.rentalId).subscribe(
         (rental) => {
this.rentalDetailData = rental;
         },
         (err) => {},
         () => {}
       );
     }
   );
  }

}
