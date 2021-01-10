const needle = require('needle');
const express = require('express');
const http = require('http');
const TOKEN = process.env.TWITTER_BEARER_TOKEN;
const PORT = process.env.PORT || 3000;
