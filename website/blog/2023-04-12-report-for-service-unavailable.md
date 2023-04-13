---
title: 障害報告
author: Yuki Matsukura
authorURL: "http://twitter.com/matsubokkuri"
authorFBID: matsubokkuri
---

## 経緯

Apr 12, 2023 

- 08:43 にAWSからのアラート
  - https://tanomimaster.slack.com/archives/C01AKAMEL1L/p1681256627871589 - Connect your Slack account
- 09:24 AM
  - エンジニア 対応開始
- 09:25 AM
  - VPC Endpoints 設定削除
  - ECSの自然復旧確認
- 09:30 AM
  - Webのレスポンスが帰ってくることを確認

## 原因

- Apr 12, 2023 0:17 AM にECRへのVPC Endpointsの設定に誤りがあった模様。
  - ECRへのトラフィックを抑制することによるNAT Gatewayへのトラフィック削減のための設定
- 8:40 AM頃にECSのコンテナの再始動がかかり、その際にECRからdocker imageの取得ができなくなくてサービス自体の停止に至った
- 8:25 AMにVPC endpointsの設定を削除し、ECS自体は数分〜十数分に1回再始動が行われるのでそのタイミングでdocker imageの取得が行えてサービスの復旧が行われた。
  - ECSのコンテナの再起動は、数分〜数日に1度程度の頻度で発生している。

