---
id: api
title: "API仕様"
tags:
  - API
---


## 概要

- タノミマスターを利用する際にWebからの操作だけでなく、REST APIによっても情報を取得や更新を行えます。
- REST APIの種別は大きく3種類、小売向け、メーカー向け、共通に分かれています。
  - 小売向けのAPIは発注、納品通知などを行えます。
  - メーカー向けのAPIは受注処理、納期回答などを行えます。
  - 共通APIは、タノミマスターで利用しているカテゴリなどのマスタの取得を行えます。


## APIドキュメント

稼働中のAPI仕様は以下のURLで閲覧できます。各環境ごとにAPIの実装が異なる場合があるのでAPIのバージョンをご確認ください。

- 本番環境: https://tanomimaster.com/docs/api
- ステージング環境: https://staging.tanomimaster.com/docs/api
- 開発環境: https://development.tanomimaster.com/docs/api

上記のページはOpenAPI Specificationで書かれたドキュメントの一部が抜粋されて見やすく簡易的に表示されています。
開発者や、開発時に参照する目的の場合は、OpenAPI Speificationのymlファイルを上記からダウンロードし、Swagger Editorなどを利用して可視化することをおすすめします。
参考: [Swagger Editor](https://editor.swagger.io/)

APIのリクエストやレスポンスをCLIから簡易的に確認するためのサンプルコードを以下に掲載しています。
https://github.com/tanomimaster/tanomimaster-openapi/wiki


## API実装の方向性

- Web上で行える操作はREST APIでも同様に操作できるようになっています。
- API仕様は幅広く意見や参加者を募集したいのでOSSとして公開しております。
  - 不具合報告、機能提案などはこちらから行えます。
  - https://github.com/tanomimaster/tanomimaster-openapi

## 動作環境

開発環境、ステージング環境、本番環境の3つの環境があります。エンドポイントはAPI仕様に記載してあります。


## APIキー

REST APIを呼び出すためにはキーが必要になります。小売単位、メーカー単位で1つ発行できます。

## API呼び出しの仕様

### 受注確定処理

メーカー向けに受注確定を行う際の推奨事項を記載します。

メーカーが受注確定をしていない注文は、小売側からキャンセルが可能になっています。そのため、下の図で示す2と3の間に小売からキャンセルが行われます。できるだけそのパターンを減らすために2と3の呼び出しの間隔は短くすることを推奨します。

また、受注確定をする前にメーカー内での受注処理を行ってしまうと小売からキャンセルになる可能性があるためタノミマスター上で受注確定を行ってからメーカー内で受注に関する処理を行うことを推奨します。

![alt-text](/img/order-confirm-sequence.png)


### 注文状態に応じた注文の取得

#### メーカー

注文の状態に対して、その注文を取得する際のパラメータの一覧を記載します。

| ステータス |                          | API Query string parameter                              |
| ----- | ------------ | ---------------------------------------------- |
| 納期未回答 | 発注済み                 | status=0&is_confirmed=false                             |
|            | 黒伝連携済み             | status=0&is_confirmed=true                              |
| 出荷待ち   |                          | status=2                                                |
| 出荷済み   |                          | status=3                                                |
| 納品済み   |                          | status=4                                                |
| キャンセル | 黒伝連携前キャンセル     | status=99&is_confirmed=false&is_cancel_confirmed=false  |
|            | 連携前キャンセル連携済み | status=99&is_confirmed=false&is_cancel_confirmed=true   |
|            | 赤伝キャンセル           | status=99&is_confirmed=true&is_cancel_confirmed=false   |
|            | 赤伝キャンセル連携済み   | status=99&is_confirmed=true&is_cancel_confirmed=true    |


## 受注CSVとREST APIのエンティティの対応表

[受注CSV](/tanomimaster-doc/docs/csv#受注CSV)にあるCSVカラムがREST APIのどのエンティティのアトリビュートに対応するかを表にします。


| カラム | 名称          | エンティティ            | アトリビュート                |
| --- | ----------- | ----------------- | ---------------------- |
| 1   | 発注依頼区分      | N/A               | N/A                    |
| 2   | 小売コード       | Retail            | code                   |
| 3   | 小売名         | Retail            | name                   |
| 4   | 小売支店コード     | RetailBranch      | code                   |
| 5   | 小売支店名       | RetailBranch      | name                   |
| 6   | 小売営業所コード    | RetailSalesOffice | code                   |
| 7   | 小売営業所名      | RetailSalesOffice | name                   |
| 8   | 発注日時        | Order             | ordered_at             |
| 9   | 仕入先名        | Maker             | name                   |
| 10  | 注文番号        | Order             | code                   |
| 11  | 注文明細No      | OrderProduct      | branch_number          |
| 12  | 型式（品番）      | OrderProduct      | code                   |
| 13  | メーカー内部コード   | OrderProduct      | internal_code          |
| 14  | ガス種         | OrderProduct      | gas_type               |
| 15  | カタログURL     | OrderProduct      | catalog_url            |
| 16  | 承認図URL      | OrderProduct      | approved_drawing_url   |
| 17  | 発注数         | OrderProduct      | number_of_items        |
| 18  | 発注単価        | OrderProduct      | maker_price_for_retail |
| 19  | 希望納期        | OrdersMaker       | desired_delivery_date  |
| 20  | メーカー営業所名    | MakerSalesOffice  | name                   |
| 21  | メーカー営業所電話番号 | MakerSalesOffice  | tel                    |
| 22  | メーカー営業所FAX  | MakerSalesOffice  | fax                    |
| 23  | 小売担当者名      | RetailUser        | last_name first_name   |
| 24  | 納品先名        | OrderProduct      | shipping_office_name   |
| 25  | 納品先住所       | OrderProduct      | shipping_address       |
| 26  | 納品先TEL      | OrderProduct      | shipping_tel           |
| 27  | 明細単位の備考     | OrderProduct      | memo                   |
| 28  | 注文単位の備考     | Order             | memo                   |
