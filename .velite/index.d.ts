// This file is generated by Velite

import config from '../velite.config'

type Collections = typeof config.collections

export type Page = Collections['pages']['schema']['_output']
export declare const pages: Page[]

export type Post = Collections['posts']['schema']['_output']
export declare const posts: Post[]
