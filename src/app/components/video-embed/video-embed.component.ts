import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss'],
})
export class VideoEmbedComponent implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key: string | null = null;

  url: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (this.site === 'YouTube') {
      this.url = this.getSafeUrl('https://www.youtube.com/embed/') + this.key!;
    } else if (this.site === 'Vimeo') {
      this.url = this.getSafeUrl('https://player.vimeo.com/video/') + this.key!;
    }
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
