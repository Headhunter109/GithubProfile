"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
exports.IS_NODE = typeof global !== "undefined" && new Object().toString.call(global) === "[object global]";
// Init process.env
exports.IS_NODE && require("dotenv").config({ path: path.resolve(__dirname, "./envrc") });
exports.IS_PROD = process.env.NODE_ENV === "production";
exports.IS_DOCKER = process.env.CONTAINER_ENV === "docker";
// CDN or Local assets url
exports.PUBLIC_ASSETS_URL = exports.IS_PROD ? process.env.OS_CND_ASSETS_URL || "/assets/" : "/assets/";
// SSR Server
exports.SSR_SERVER_HOST = exports.IS_PROD ? "127.0.0.1" : "127.0.0.1";
exports.SSR_SERVER_PORT = exports.IS_PROD ? 8082 : 9002;
// API Server
exports.API_SERVER_HOST = exports.IS_PROD ? "127.0.0.1" : "127.0.0.1";
exports.API_SERVER_PORT = exports.IS_PROD ? 8000 : 9000;
exports.API_BASE = exports.IS_PROD && !exports.IS_NODE
    ? "" + (location.protocol === "https:" ? "https://" : "http://") + location.host + "/api/"
    : "http://" + (exports.IS_DOCKER ? "apinode" : exports.API_SERVER_HOST) + ":" + exports.API_SERVER_PORT + "/api/";
// WebSocket Server(Ratelimit realtime notify)
exports.WS_SERVER_HOST = exports.IS_PROD ? "127.0.0.1" : "127.0.0.1";
exports.WS_SERVER_PORT = exports.IS_PROD ? 8999 : 8999;
exports.WS_RATELIMIT_PATH = "/ws/ratelimit";
exports.WS_API_BASE = exports.IS_PROD && !exports.IS_NODE
    ? (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/ws/ratelimit"
    : "ws://" + exports.WS_SERVER_HOST + ":" + exports.WS_SERVER_PORT + exports.WS_RATELIMIT_PATH;
// Github Token
exports.GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
// Redis credentials
exports.REDIS_HOST = process.env.OS_REDIS_HOST || "127.0.0.1";
exports.REDIS_PORT = process.env.OS_REDIS_PORT || 6379;
exports.REDIS_PASSWORD = process.env.OS_REDIS_PASSWORD || "";
