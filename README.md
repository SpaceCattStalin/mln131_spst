# SCIENTIFIC SOCIALISM LANDING PAGE

**Giới thiệu:**  
Đây là repo landing page cho sản phẩm sáng tạo của nhóm 6, phát triển trong khuôn khổ môn MLN131 - Block 3W Fall 2025.

## Công nghệ sử dụng

![Next.js](https://img.shields.io/badge/Next.js-16-blue)
![React](https://img.shields.io/badge/React-19-lightblue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8)

- Framework: Next.js 16 AppRouter & React 19
- Programming language: TypeScript
- UI library: shadcn/radix-ui
- CSS framework: TailwindCSS
- Package manager: npm

## Hướng dẫn chạy dự án

Cài đặt phiên bản Node.js tối thiểu 20.9

Clone [dự án](https://github.com/binhpv96/scientific-socialism.git) về máy và chạy lệnh:

```
npm install
npm run dev
```

Mở trình duyệt và truy cập vào [http://localhost:3000/](http://localhost:3000/).

---

## Một số quy tắc chung để xây dựng dự án/Best Practices

### 1. Về cấu trúc dự án

- Đặt tên files và folders theo Kebab Case (kebab-case).
- Đặt các components vào src/components, tên file có từ 2 - 3 từ.

### 2. Về Git/Github

- KHÔNG COMMIT TRỰC TIẾP VÀO NHÁNH MAIN.
- Tạo các nhánh dựa theo username/feature (ví dụ _binhpv96/minigame_) hoặc commit vào một nhánh duy nhất (ví dụ _binhpv96_).
- Tạo các _Pull Request_ để review trước khi merge vào main.
- Tạo các _Issues_ để báo cáo lỗi, thảo luận,...
- Không viết các commit không có ý nghĩa.

### 3. Về Code Format

- Sử dụng Prettier (sẽ được đề xuất nếu chưa tải) đã được cấu hình sẵn để format code mỗi lần lưu.
- Đặt tên các biến theo các quy tắc của JavaScript/TypeScript (_camelCase_, _PascalCase_).

---

## Lưu ý về tối ưu hiệu suất

- Ưu tiên dùng [_'\<Image \/\>'_](https://nextjs.org/docs/app/getting-started/images) component từ Next.js cho hình ảnh.
- Không sử dụng các client UI library như [Ant Design](https://ant.design/), [MUI](https://mui.com/),...
