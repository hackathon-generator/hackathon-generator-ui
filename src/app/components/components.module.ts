import { NgModule } from '@angular/core';
import { ApiCardComponent } from './api-card';
import { ButtonComponent } from './button';
import { CardComponent } from './card';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { IconComponent } from './icon';
import { PageComponent } from './page';

const COMPONENTS = [
  ApiCardComponent,
  ButtonComponent,
  CardComponent,
  FooterComponent,
  HeaderComponent,
  IconComponent,
  PageComponent,
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
