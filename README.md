# 善通寺市ジュニアバレーボールクラブ 公式サイト

`index.html` 1ファイルで完結する公式サイトです（CSS・JSも同ファイル内）。
`manifest.json` と `sw.js` を同じフォルダに置くとPWA（ホーム画面追加）に対応します。

## フォルダ構成

```
zentsuji-junior-volley/
├── index.html      … サイト本体（これをそのまま公開すればOK）
├── manifest.json   … PWA設定
├── sw.js           … オフラインキャッシュ用の簡易Service Worker
└── assets/         … ロゴ・アイコン・写真を置く場所（現在は空）
```

## すぐに変更してほしい項目（`index.html` 内 `CONFIG` オブジェクト）

`index.html` の `</body>` 直前、`<script>` タグの中に以下があります。ここを書き換えるだけで
サイト全体のリンク・基本情報が更新されます。

```js
const CONFIG = {
  teamName: "善通寺市ジュニアバレーボールクラブ",
  instagramUrl: "",     // InstagramのURL
  googleMapsUrl: "",    // 体育館のGoogleマップ共有URL
  applyFormUrl: "",     // 見学・体験申込用Googleフォーム
  contactFormUrl: "",   // お問い合わせ用Googleフォーム
  contactEmail: "",     // 問い合わせ用メールアドレス
  venueName: "",        // 体育館名
  venueAddress: "",     // 住所
  joinTime: "",         // 活動日時（例：毎週土・日 9:00〜12:00）
};
```

未入力の項目はボタンを押すとお問い合わせセクションへ移動するようになっているため、
リンク切れにはなりません。

## 写真の差し替え

現在、写真部分はすべてグラデーションのプレースホルダー（仮画像）になっています。
実際の写真をご用意いただき次第、以下を差し替えてください。

- **ヒーロー背景**：`#heroPhoto` の `style.backgroundImage`（`index.html` 内のJS）
- **ABOUT / JOIN US の写真**：`.about-photo` / `.join-photo` の `background` を `background-image:url(...)` に変更
- **NEWS・GALLERY・選手写真**：各データ配列（`newsData` / `albums` / `members`）の `img` / `photo` にファイルパスを設定

写真は `assets/` フォルダに入れて、相対パス（例：`assets/photo01.jpg`）で指定してください。

## お知らせ・活動予定・大会結果・選手情報の更新

`index.html` 内の以下のJavaScript配列を編集するだけで内容が反映されます（コーディング知識がなくても、
配列の中の日本語・日付・URLを書き換えるだけで運用できます）。

| セクション | 変数名 |
|---|---|
| お知らせ | `newsData` |
| 活動予定 | `scheduleData` |
| 大会・試合結果 | `matchData` |
| 選手紹介 | `members` |
| 活動写真 | `albums` |

### 選手情報の公開・非公開について

`members` 配列の各選手データには `isPublic: true / false` を設定できます。`false`
にすると一覧には表示されません（個人情報保護のため、デフォルトでは選手データを1件も入れていません。
保護者の同意が取れた選手から順に追加してください）。

## favicon / アプリアイコン

現在は仮のSVGアイコン（ロゴ完成前の代替）を使用しています。ロゴが完成したら、
`assets/` に以下のファイルを用意し、`index.html` の `<head>` 内のリンクを差し替えてください。

- `assets/apple-touch-icon.png`（180×180）
- `assets/icon-192.png`（192×192）
- `assets/icon-512.png`（512×512）
- `assets/ogp-image.jpg`（1200×630／SNSでシェアされた時に表示される画像）

## 今後の拡張（管理画面・データベース化）について

現在は「静的サイト＋JavaScriptの配列」でお知らせ・予定・結果・選手情報を管理する構成になっています。
更新頻度が上がってきた場合や、専用の管理画面（ログインして更新できる仕組み）が必要になった場合は、
**Supabase** または **Firebase** への移行を想定した構造にしてあります（データを配列ではなくデータベースの
テーブルから取得する形に置き換えるだけで対応可能です）。その際は以下のような対応になります。

1. Supabase/Firebaseにテーブルを作成（news / schedule / matches / members / albums）
2. 管理者専用のログインページを作成
3. `index.html` 内のデータ取得部分を、配列からAPI呼び出しに置き換え

このタイミングでの移行作業もご相談いただければ対応可能です。

## 公開方法（例）

このフォルダをそのまま以下のようなサービスにアップロードすれば公開できます。

- レンタルサーバー（FTPで `zentsuji-junior-volley` フォルダの中身をアップロード）
- Netlify / Vercel / GitHub Pages（フォルダをそのままドラッグ＆ドロップ、または連携）

独自ドメインを設定する場合は、各サービスの案内に従ってDNS設定を行ってください。
