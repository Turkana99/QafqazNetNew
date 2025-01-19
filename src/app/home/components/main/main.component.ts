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

  ourServices: {
    id: number;
    icon: string;
    title: string;
    description: string;
  }[] = [
    {
      id: 1,
      icon: 'fa-regular fa-message',
      title: 'IT Konsaltinq',
      description:
        'Texnologiya investisiyalarınızı maksimuma çatdırmaq üçün mürəkkəb İT mühitində ekspert rəhbərliyi əldə edin.',
    },
    {
      id: 2,
      icon: 'fa-solid fa-globe',
      title: 'İnfrastruktur və Şəbəkə',
      description:
        'Şəbəkə performansınızı optimallaşdırmaq üçün təhlükəsiz, çevik və etibarlı İT infrastrukturu dizayn edin və tətbiq edin.',
    },
    {
      id: 3,
      icon: 'fa-solid fa-cloud-arrow-up',
      title: 'Bulud Texnologiyaları',
      description:
        'Biznes ehtiyaclarınıza uyğunlaşdırılmış miqyaslana bilən bulud həlləri ilə əməliyyatlarınızı təkmilləşdirin.',
    },
    {
      id: 4,
      icon: 'fa-solid fa-database',
      title: 'Verilənlər Bazası və İnformasiya İdarəetməsi',
      description:
        'Effektiv verilənlər bazası həlləri və informasiya idarəetməsi xidmətləri ilə məlumat əməliyyatlarınızı səmərələşdirin.',
    },
    {
      id: 5,
      icon: 'fa-solid fa-lock',
      title: 'Kiber Təhlükəsizlik və İT Standartlarına Uyğunluq',
      description:
        'Təşkilatınızı güclü kiber təhlükəsizlik strategiyaları ilə qoruyun və İT standartlarına uyğunluğu təmin edin.',
    },
    {
      id: 6,
      icon: 'fa-solid fa-code',
      title: 'Proqram Təminatı',
      description:
        'Fikirlərinizi xüsusi proqram təminatı xidmətlərimizlə reallığa çevirin.',
    },
    {
      id: 7,
      icon: 'fa-solid fa-server',
      title: 'Hosting və Veb Xidmətləri',
      description:
        'Etibarlı hosting həlləri və hərtərəfli veb xidmətlərimizlə onlayn mövcudluğunuzu gücləndirin.',
    },
    {
      id: 8,
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'Dizayn və Vizualizasiya',
      description:
        'Yaradıcı dizayn və vizualizasiya həllərimizlə konseptlərinizi həyata keçirin.',
    },
    {
      id: 9,
      icon: 'fa-solid fa-gears',
      title: 'Texniki Dəstək',
      description:
        'İT sistemlərinizin fasiləsiz işləməsini təmin etmək üçün xüsusi texniki dəstək xidmətlərimizdən yararlanın.',
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
