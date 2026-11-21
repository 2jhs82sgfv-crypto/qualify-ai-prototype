# QUALIFY AI v0.3 – AI資料取込の基盤

## 今回追加したもの
- 「AI資料取込」画面
- PDF / JPEG / PNG / WebP / DOCX / XLSX / XLS / CSV / TXT / Markdown の選択UI
- 抽出問題の確認待ちリスト（編集して個別登録・破棄）
- 予測問題の自動登録（origin: AI予測問題）
- 問題管理から登録済み問題を編集する導線
- JSONバックアップに確認待ち問題も含める
- OpenAI APIキーをブラウザに置かないNode.js APIサーバーの雛形（server/）

## 公開構成
- フロントエンド：GitHub Pages
- AI処理：server/ のNode.js APIサーバーを別のHTTPSホストへデプロイ
- APIキー：APIサーバーの環境変数 `OPENAI_API_KEY` のみ

## 注意
このZIPをGitHub Pagesへアップロードしただけでは、AI解析はまだ動きません。先に `server/` をHTTPSで公開し、APIサーバーURLを「AI資料取込」画面に設定する必要があります。APIサーバーを準備するまでは、資料選択UIと確認キューは利用できますが、実際のAI解析はできません。

OpenAI Responses APIを利用します。PDF・画像はモデル入力として送信し、DOCX・Excel等はサーバーでテキスト抽出して送信します。Responses APIはテキスト・マルチモーダル入力に対応するAPIです。

## v0.3のデータの扱い
- 資料抽出問題：`pendingReview` に入り、ユーザー確認後に `questions` へ追加
- AI予測問題：`questions` に自動追加し、`origin` を `AI予測問題` として識別
- JSON：端末内データのバックアップ・移行用。AI解析サーバーの永続データベースではありません。

## 未実装 / 次段階
- APIサーバーの本番デプロイとAPIキー設定
- 問題データベース（PostgreSQL等）と複数端末同期
- ユーザー認証・権限・利用量制限
- 公式情報のWeb検索と出典検証
- PDFのページ番号・画像領域・図表参照の精密な保持
- 予測問題の重複検知と品質評価

サンプル問題は動作確認用のオリジナル例題で、公式過去問ではありません。
