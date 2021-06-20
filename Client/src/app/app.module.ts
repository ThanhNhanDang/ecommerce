import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrandComponent } from './components/brand/brand.component';
import { FeatureComponent } from './components/feature/feature.component';
import { CategoryComponent } from './components/category/category.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { FeatureProductComponent } from './components/feature-product/feature-product.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { RecentProductComponent } from './components/recent-product/recent-product.component';
import { ReviewComponent } from './components/review/review.component';
import { FooterBottomComponent } from './components/footer-bottom/footer-bottom.component';
import { BestSellingComponent } from './components/best-selling/best-selling.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { BannerComponent } from './components/banner/banner.component';
import { MainTopComponent } from './components/main-top/main-top.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { HomeComponent } from './templates/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckoutComponent } from './templates/checkout/checkout.component';
import { MyAccountComponent } from './templates/my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BottomBarComponent,
    TopBarComponent,
    MainBannerComponent,
    NavbarComponent,
    BrandComponent,
    FeatureComponent,
    CategoryComponent,
    CallToActionComponent,
    FeatureProductComponent,
    NewsletterComponent,
    RecentProductComponent,
    ReviewComponent,
    FooterBottomComponent,
    BestSellingComponent,
    NewArrivalsComponent,
    ProductDetailComponent,
    CartComponent,
    WishListComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    BannerComponent,
    MainTopComponent,
    MainBodyComponent,
    MainFooterComponent,
    HomeComponent,
    ProductsComponent,
    CheckoutComponent,
    MyAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
