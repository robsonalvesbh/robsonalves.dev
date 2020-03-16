---
date: 2019-03-11 21:33:50
title: "Create reports quickly and increase your knowledge of your data with this incredible tool"
description: "Sometimes we need to create reports about our sales, customers or finances and we spend a lot of time, coding, plotting the data in a graph, and at the end of the day, we just created a little monster (system) that we will need to do maintenance and fix the bugs for a long time."
image: /assets/img/posts/dashboard-metabase.png
tags: [Data]
---

Sometimes we need to create reports about our sales, customers or finances and we spend a lot of time, coding, plotting the data in a graph, and at the end of the day, we just created a little monster (system) that we will need to do maintenance and fix the bugs for a long time.

If you’ve already been through this, you need to know the Metabase, a free tool that we can plug in it in our database and create easily and quickly reports and show the data in a graph, or in a table and other ways.

It’s not necessary to know no one programming language. The Metabase is easy to install and supports the databases:

- MySQL
- Postgres
- MongoDB
- SQL Server
- Google Analytics
- Google BigQuery

### Dashboards

You can build some queries, save them as a graph, put all graphs together in a dashboard, share with your team and in a few clicks you have a real-time dashboard.

!['Dashboard with graphs and auto refresh'](/assets/img/posts/dashboard-metabase.png)
*Dashboard with graphs and auto refresh*

### Questions

You can create a simple query like:

```sql
SELECT email FROM customer WHERE ssn = {{ ssn_number }};
```

Save as a question, and your team can use this question to pick up the customers' email just by passing the SSN number as a parameter.

!['variables in a questions'](/assets/img/posts/questions-metabase.png)
*variables in a questions*

The questions it's helpful because you can add up variables in your query and use them as parameters.

### Query builder and Native Query

With this query editors, you don’t need to give write privilege in the production database, your team can execute queries in a database with reading privilege, and you can sleep soundly. ;)

!['Example of a Query builder'](/assets/img/posts/query-builder-metabase.png)
*Example of a Query builder*

Ideally, you would have a replica of your database.

### Pulse

Another feature that I use a lot, it's Pulse, you create a simple query and add up a condition, if the condition becomes true, you can set up to deliver a notification via email or slack.

### Conclusion

When I discovered the Metabase, it blew up my mind, this tool it's very powerful and easy to manage, no require a previous knowledge and for sure, this tool will save much of your time.