import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {

  requestSent = false
  data = [
    {
      id: 1,
      name: 'Şəbəkə və İnformasiya Texnologiyaları (İT) Avadanlıqları',
      active: true,
      sections: [
        {
          title: 'Şəbəkə Cihazları',
          products: [
            'Routerlər (Mikrotik, TP-Link, Cisco, Teltonika)',
            'Switçlər (Cisco, HP, Hikvision, TP-Link, Wi-Tek)',
            'Serverlər, NAS sistemləri',
            'Access pointlər (Ubiquiti UniFi, FortiAP, TP-Link)',
            'Modemlər, media konvertorlar',
            'Şəbəkə adapterləri, Wi-Fi adapterlər',
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Printer, Kartriclər və Çap Avadanlıqları',
      active: false,
      sections: [
        {
          title: 'Printerlər',
          products: [
            'HP, Canon, Xerox lazer və rəngli printerlər',
            'Barkod printerlər (Zebra, Argox)',
          ],
        },
        {
          title: 'Kartric və Tonerlər',
          products: [
            'HP, Canon, Lexmark kartricləri və tonerləri',
            'Drum kartuşları, çiplər',
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Kameralar, Təhlükəsizlik və Nəzarət Sistemləri',
      active: false,
      sections: [
        {
          title: 'Kameralar',
          products: [
            'Hikvision, Dahua, Novus IP və HD kameraları',
            'Fisheye, bullet, dome tipli kameralar',
          ],
        },
        {
          title: 'Rekorderlər',
          products: ['DVR və NVR sistemləri (Hikvision, Dahua)'],
        },
        {
          title: 'Aksesuarlar və Avadanlıqlar',
          products: [
            'Kamera kranşteynləri, montaj qutuları',
            'CCTV kabelləri, BNC kabelləri',
            'Təhlükəsizlik sistemləri (paradox, siqnalizasiya sistemləri)',
            'Access control cihazları, maqnit kilidlər, exit button-lar',
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'Ofis və Kompüter Avadanlıqları',
      active: false,
      sections: [
        {
          title: 'Kompüterlər və Aksesuarları',
          products: [
            'Desktop PC (HP, Lenovo, xüsusi yığılmış sistemlər)',
            'Noutbuklar (HP, Lenovo, Apple MacBook)',
            'Monitorlar (HP, Lenovo, Samsung)',
            'Klaviaturalar və siçanlar (A4Tech, Logitech, Apple)',
            'SSD, HDD, RAM modulları',
            'Printerlər, skanerlər',
          ],
        },
      ],
    },
  ];

  switchTab(id: any) {
    this.data.forEach((x: any) => {
      x.active = x.id == id;
    });
  }

  getActiveData() {
    return this.data.find((item: any) => item.active)!.sections;
  }
}
