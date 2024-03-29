---
id: maker 
title: "メーカー"
sidebar_label: "メーカー"
tags:
  - メーカー
---
## 概要

- 主な業務である、受注の管理と納期回答を行えます。
- 将来的にEDI連携、API連携を行えるようにする予定です。
- この説明書は、サービスの利用にあたって、必要となるモデルや概念について解説します。

## ロール

2種類のロール（役割）があります。

- 管理者
  - マスタの管理を行います。
- 一般
  - 注文の処理を行います。

## 端末


各メーカーごとに異なるログイン用URLが割り当てられます。各ログインページは、初期に登録した接続元のIPアドレスを登録しなければ表示することができません。

- Web
- アプリ
  - 重要な通知はPush通知が配信されます。


## 初期設定

- 管理者でログインして、マスタを入稿します。

### マスタ入稿

マスタデータはすべてWebから入稿できます。依存関係があるので基本的に上の方からデータを入稿するのがおすすめです。入稿フォーマットの詳細は[入稿データフォーマット](csv.md)を参照してください。

![メーカーメニュー](/img/tanomimaster/maker_menu.png)


## 運用


### チャット

- 発注者とメーカー担当者は1:1のチャットを行えます。表示はリアルタイムに行われます。
- 注文が行われた際に、マスタで入稿されたルールに従って小売の営業所に対応するメーカーの担当が自動的にアサインされます。


### 納期回答

- 小売から行われた注文における、ステータスは以下のように管理されます。
  - システム間連携を踏まえ、メーカー側で基幹システム連携用のCSVファイルの作成を行った後にダウンロードができるようになります。
- 受注を確定するためのCSVダウンロードは、スナップショットとしてサーバに保存されます。


