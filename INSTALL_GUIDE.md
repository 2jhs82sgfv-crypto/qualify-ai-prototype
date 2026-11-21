# QUALIFY AI v0.3 更新手順

## GitHub Pagesの画面を更新
1. ZIPを解凍する。
2. 中身の `index.html`、`app.js`、`manifest.webmanifest`、`sw.js`、アイコン3点、README、INSTALL_GUIDEをGitHubリポジトリのルートへアップロードする。
3. 既存ファイルと同名のものは置き換える。
4. `server` フォルダもリポジトリに置いて構いませんが、GitHub PagesはNode.js APIサーバーとして実行しません。
5. アプリを再読み込みする。古いService Workerが残る場合はSafariでページを再読み込みし、必要ならホーム画面アプリを一度終了して再起動する。

## AI解析を本当に動かすには
1. `server/` フォルダをNode.js 20以上のHTTPS対応ホストへ別途デプロイする。
2. ホストの環境変数に `OPENAI_API_KEY` を登録する。キーはブラウザやGitHubへ絶対に置かない。
3. `FRONTEND_ORIGIN` にGitHub Pagesのオリジン（例 `https://ユーザー名.github.io`）を設定する。
4. 公開したAPI URLをアプリの「AI資料取込」画面に入力する。
5. `/health` が `{"ok":true}` を返すことを確認してから資料解析を試す。

APIキーの発行とAPI利用にはOpenAI Platformの設定・API課金が必要です。ChatGPTの利用プランとは別です。
