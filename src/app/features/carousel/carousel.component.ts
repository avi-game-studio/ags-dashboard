import { Component, OnInit } from '@angular/core';
// import { Product } from '@domain/product';
// import { CarouselService } from '@service/CarouselServiceService';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'carousel-basic-demo',
    templateUrl: './carousel.component.html',
    standalone: true,
    imports: [CarouselModule, ButtonModule, TagModule],
    // providers: [CarouselService]
})
export class CarouselComponent implements OnInit {
    products: any[];

    responsiveOptions: any[] | undefined;

    constructor() {
        this.products = []
    }

    ngOnInit() {
        // this.productService.getProductsSmall().then((products) => {
        // this.products = products;
        // });

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return "info"
        }
    }
}