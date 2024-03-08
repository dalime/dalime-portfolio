export interface PortfolioItemInterface {
  title: string;
  description: string;
  role: string;
  results: string;
  before: string;
  work: string;
  approach: string;
  feedback: string;
  imgSrc: string;
  viewLink?: string;
  codeLink?: string;
  mobileImg?: string;
}

interface RenderedObj {
  rendered: string;
}

interface ProtectedRenderedObj extends RenderedObj {
  protected?: boolean;
}
interface HrefObj {
  href: string;
}

interface EmbeddableHrefObj extends HrefObj {
  embeddable?: boolean;
}

export interface WPPost {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: RenderedObj;
    content: ProtectedRenderedObj;
    excerpt: ProtectedRenderedObj;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: {
        om_disable_all_campaigns: boolean;
        _mi_skip_tracking: boolean;
        _monsterinsights_sitenote_active: boolean;
        _monsterinsights_sitenote_note: string;
        _monsterinsights_sitenote_category: number;
        "site-sidebar-layout": string;
        "site-content-layout": string;
        "ast-global-header-display": string;
        "ast-banner-title-visibility": string;
        "ast-main-header-display": string;
        "ast-hfb-above-header-display": string;
        "ast-hfb-below-header-display": string;
        "ast-hfb-mobile-header-display": string;
        "site-post-title": string;
        "ast-breadcrumbs-content": string;
        "ast-featured-img": string;
        "footer-sml-layout": string;
        "theme-transparent-header-meta": string;
        "adv-header-id-meta": string;
        "stick-header-meta": string;
        "header-above-stick-meta": string;
        "header-main-stick-meta": string;
        "header-below-stick-meta": string;
        footnotes: string;
    };
    categories: number[];
    tags: number[];
    aioseo_notices: [];
    x_categories: string;
    x_tags: string;
      x_featured_media: string;
      x_featured_media_medium: string;
      x_featured_media_large: string;
      x_featured_media_original: string;
      x_date: string;
      x_author: string;
      x_gravatar: string;
      x_metadata: {
          _aioseo_title: string;
          _aioseo_description: string;
          _aioseo_keywords: string;
          _aioseo_og_title: string;
          _aioseo_og_description: string;
          _aioseo_og_article_section: string;
          _aioseo_og_article_tags: string;
          _aioseo_twitter_title: string;
          _aioseo_twitter_description: string;
          _thumbnail_id: string;
          footnotes: string;
          om_disable_all_campaigns: string;
          _mi_skip_tracking: string;
          ast_featured_img: string;
          theme_transparent_header_meta: string;
          adv_header_id_meta: string;
          stick_header_meta: string;
      };
    _links: {
        self: HrefObj[];
        collection: HrefObj[];
        about: HrefObj[];
        author: EmbeddableHrefObj[];
        replies: EmbeddableHrefObj[];
        "version-history": {count: number; href: string;}[];
        "predecessor-version": {id: number; href: string;}[];
        "wp:featuredmedia": {embeddable: boolean; href: string;}[];
        "wp:attachment": {href: string;}[];
        "wp:term": {taxonomy: string; embeddable: boolean; href: string;}[];
        curies: {name: string; href: string; templated: boolean;}[];
    }
}

export interface ClientReview {
  name: string;
  company: string;
  rating: number;
  feedback: string;
  clientImgName: string;
}

export interface SnackBarState {
  message: string;
  color: "success" | "error" | "info" | "warning";
  action?(): void;
}
