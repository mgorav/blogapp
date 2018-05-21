import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogappBlogModule } from './blog/blog.module';
import { BlogappEntryModule } from './entry/entry.module';
import { BlogappTagModule } from './tag/tag.module';
import { BlogappProductModule } from './product/product.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BlogappBlogModule,
        BlogappEntryModule,
        BlogappTagModule,
        BlogappProductModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogappEntityModule {}
