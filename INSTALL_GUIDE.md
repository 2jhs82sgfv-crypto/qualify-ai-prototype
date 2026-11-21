# QUALIFY AI v0.4 iPhone導入ガイド

## GitHub Pages更新
1. GitHubリポジトリのルートに、`qualify_ai_v03_ai_import.zip` という名前でこのZIPをアップロードします。
2. `.github/workflows/extract-app.yml` がZIPを展開し、アプリファイルを `main` ブランチのルートへコピーします。
3. GitHubのActionsで「Extract app ZIP」が成功し、続いて「pages build and deployment」が成功したことを確認します。
4. 公開アプリを開き、Safariの更新ボタンで再読み込みします。ホーム画面に追加したアプリの場合、古いキャッシュが残ることがあります。

## ChatGPTで参考問題を登録し、予想問題を生成
1. アプリの「参考問題＋予想問題」タブを開きます。
2. 資格を選択し、参考問題のPDF・画像等を選択します。
3. 「ChatGPTに資料を渡す」を押して共有シートからChatGPTを選択します。共有できない場合はChatGPTで資料を添付し、指示文を貼り付けます。
4. ChatGPTに参考問題と予想問題を含むJSONファイルを作成してもらいます。
5. アプリに戻り、そのJSONを「ChatGPTの結果を取り込む」から読み込みます。

## 注意
ChatGPTからアプリへ生成結果を自動返送する仕組みはiOS上で提供されないため、JSONファイルを一度選択して取り込む必要があります。問題データは端末のブラウザ内に保存されます。定期的にJSONバックアップを行ってください。
