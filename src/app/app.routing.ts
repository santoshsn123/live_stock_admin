import {Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { 
  AuthGuardService as AuthGuard 
} from './service/auth-guard/auth-guard.service';
import { CategoryComponent } from './pages/calculator/category/category.component';
import { AnimalsComponent } from './pages/calculator/animals/animals.component';
import { TrailerComponent } from './pages/calculator/trailer/trailer.component';
import { DashboardCustomComponent } from './pages/dashboard-custom/dashboard-custom.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { LoadsCommanPageComponent } from './pages/loads-comman-page/loads-comman-page.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        component:DashboardCustomComponent
        // loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      }, 
      {
        path: 'category',
        component:CategoryComponent
        // loadChildren: './pages/calculator/category/category.componet'
      }, 
      {
        path: 'animals',
        component:AnimalsComponent
        // loadChildren: './pages/calculator/category/category.componet'
      }, 
      {
        path: 'trailer',
        component:TrailerComponent
        // loadChildren: './pages/calculator/category/category.componet'
      }, 
      {
        path: 'loads',
        component:LoadsCommanPageComponent
        // loadChildren: './pages/calculator/category/category.componet'
      }, 
      {
        path: 'membership',
        component:MembershipComponent
        // loadChildren: './pages/calculator/category/category.componet'
      }, 
      // {
      //   path: 'basic',
      //   loadChildren: './pages/ui-elements/basic/basic.module#BasicModule'
      // }, {
      //   path: 'advance',
      //   loadChildren: './pages/ui-elements/advance/advance.module#AdvanceModule'
      // }, {
      //   path: 'animations',
      //   loadChildren: './pages/animations/animations.module#AnimationsModule'
      // }, {
      //   path: 'forms',
      //   loadChildren: './pages/ui-elements/forms/forms.module#FormsModule'
      // }, {
      //   path: 'bootstrap-table',
      //   loadChildren: './pages/ui-elements/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
      // }, {
      //   path: 'data-table',
      //   loadChildren: './pages/ui-elements/tables/data-table/data-table.module#DataTableModule',
      // }, {
      //   path: 'charts',
      //   loadChildren: './pages/charts/charts.module#ChartsModule',
      // }, {
      //   path: 'map',
      //   loadChildren: './pages/map/map.module#MapModule',
      // }, {
      //   path: 'maintenance/error',
      //   loadChildren: './pages/maintenance/error/error.module#ErrorModule'
      // }, {
      //   path: 'maintenance/coming-soon',
      //   loadChildren: './pages/maintenance/coming-soon/coming-soon.module#ComingSoonModule'
      // }, {
      //   path: 'user',
      //   loadChildren: './pages/user/user.module#UserModule'
      // }, 
      {
        path: 'users',
        loadChildren: './pages/ui-elements/crm-contact/crm-contact.module#CrmContactModule'
      },
      {
        path: 'users/details/:token',
        component:UserDetailsComponent
      }, {
        path: 'task',
        loadChildren: './pages/task/task.module#TaskModule'
      }, {
        path: 'editor',
        loadChildren: './pages/ui-elements/editor/editor.module#EditorModule'
      }, {
        path: 'invoice',
        loadChildren: './pages/invoice/invoice.module#InvoiceModule'
      }, {
        path: 'file-upload',
        loadChildren: './pages/ui-elements/file-upload/file-upload.module#FileUploadUIModule'
      }, {
        path: 'change-log',
        loadChildren: './pages/change-log/change-log.module#ChangeLogModule'
      }, {
        path: 'simple-page',
        loadChildren: './pages/simple-page/simple-page.module#SimplePageModule'
      }
    ],
    canActivate: [AuthGuard] 
  }, {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
      }, {
        path: 'maintenance/offline-ui',
        loadChildren: './pages/maintenance/offline-ui/offline-ui.module#OfflineUiModule'
      }
    ]
  },
  {
    path:'**', redirectTo: '/login'
  }
];
