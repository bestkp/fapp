#!/usr/bin/env node

// commander CLI常用开发框架
// chalk 终端文字加颜色js组件
// clui spinners、sparklines、progress bars图样显示组件
// shelljs node.js运行shell命令组件
// blessed-contrib 命令行可视化组件
// lnquirer 命令行交互信息收集组件
// figlet FIGlet is a program that creates large characters out of ordinary screen characters

import path from 'path';
import fs from 'fs';
import { Command } from 'commander/esm.mjs';
import question from '../packages/commands/questions.js';
import initial from '../packages/commands/initial.js';
const program = new Command();

program
    .version('1.0.0','-v, --version')
    .command('init')
    .description('initialize your meet config')
    .action(initial);

program
    .command('question')
    .description('enter your questions')
    .action(function(){
        question()
    });


program.parse(process.argv);