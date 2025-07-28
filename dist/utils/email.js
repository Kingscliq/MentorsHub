"use strict";
// import nodemailer from "nodemailer";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const sendEmail = async (options: any) => {
//   const transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       Pass: process.env.EMAIL_PASS,
//     },
//   });
//   const mailOptions = {
//     from: "Mentors Hub <michaelblossom8654@gmail.com>",
//     to: options.email,
//     subject: options.subject,
//     html: options.html,
//     // text: options.message,
//   };
//   // 3)send the Actual email
//   await transporter.sendMail(mailOptions);
// };
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    const mailOptions = {
        from: "Mentors Hub <michaelblossom8654@gmail.com>",
        to: options.email,
        subject: options.subject,
        html: options.html,
        // text: options.message,
    };
    yield transporter.sendMail(mailOptions);
});
exports.default = sendEmail;
