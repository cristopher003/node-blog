"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostDto = void 0;
class CreatePostDto {
    constructor(title, content, published) {
        this.title = title;
        this.content = content;
        this.published = published;
    }
    static create(props) {
        const { title, content, published } = props;
        return [undefined, new CreatePostDto(title, content, published)];
    }
}
exports.CreatePostDto = CreatePostDto;
