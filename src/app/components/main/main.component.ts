import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  private autoScrollInterval: any;
  ourCustomers: { image: string }[] = [
    {
      image: 'assets/images/customers/pmdprojects.png',
    },
    {
      image: 'assets/images/customers/pashapay.png',
    },
    {
      image: 'assets/images/customers/azsigorta.png',
    },
    {
      image: 'assets/images/customers/afb.png',
    },
    {
      image: 'assets/images/customers/fhnttnda.png',
    },
    {
      image: 'assets/images/customers/socarpolymer.png',
    },
    {
      image: 'assets/images/customers/azerlotoreya.png',
    },
    {
      image: 'assets/images/customers/mermerinsaat.png',
    },
    {
      image: 'assets/images/customers/hyattregency.png',
    },
    {
      image: 'assets/images/customers/medicalgroup.png',
    },
    {
      image: 'assets/images/customers/kristalabseron.png',
    },
    {
      image: 'assets/images/customers/milla.png',
    },
    {
      image: 'assets/images/customers/giltex.png',
    },
    {
      image: 'assets/images/customers/gilanandknauf.png',
    },
    {
      image: 'assets/images/customers/agrarco.png',
    },
  ];

  reviews = [
    {
      img: 'assets/images/quotes/ramilahmadov.jpg',
      fullname: 'Ramil Əhmədov',
      position: 'Satış Meneceri',
      message:
        'İnnovativ həllərlə yanaşaraq QafqazNet bizim şirkətin texnoloji ehtiyaclarına uyğun xüsusi həllər təklif etdi. Onların peşəkarlığı və əməkdaşlığa açıq yanaşması ilə çox razı qaldıq.',
    },
    {
      img: 'assets/images/quotes/ramilahmadov.jpg',
      fullname: 'Ramil Əhmədov',
      position: 'Satış Meneceri',
      message:
        'İnnovativ həllərlə yanaşaraq QafqazNet bizim şirkətin texnoloji ehtiyaclarına uyğun xüsusi həllər təklif etdi. Onların peşəkarlığı və əməkdaşlığa açıq yanaşması ilə çox razı qaldıq.',
    },
    {
      img: 'assets/images/quotes/ramilahmadov.jpg',
      fullname: 'Günay Quliyeva',
      position: 'Bizness mütəxəssisi',
      message:
        'İnnovativ həllərlə yanaşaraq QafqazNet bizim şirkətin texnoloji ehtiyaclarına uyğun xüsusi həllər təklif etdi. Onların peşəkarlığı və əməkdaşlığa açıq yanaşması ilə çox razı qaldıq.',
    },
  ];

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.startAutoScroll();
    
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      const carouselElement = document.querySelector(
        '.p-carousel'
      ) as HTMLElement;
      if (carouselElement) {
        const nextButton = carouselElement.querySelector(
          '.p-carousel-next'
        ) as HTMLButtonElement;
        nextButton?.click(); // Simulate clicking the next button
      }
    }, 3000); // Change every 3 seconds
  }


}
