/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type casaosPage = typeof import('./pages/casaos');
type jellyfinPage = typeof import('./pages/jellyfin');
type qbittorrentPage = typeof import('./pages/qbittorrent');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, casaosPage: casaosPage, jellyfinPage: jellyfinPage, qbittorrentPage: qbittorrentPage }
  interface Methods extends Playwright, REST {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
