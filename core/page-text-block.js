import { LitElement, html, css } from 'lit';
import { PageBlock } from './page-block';

export class PageTextBlock extends PageBlock {

    static styles = css`
        :host {
            width: 100%;
        }

        textarea {
            width: 90%;
            height: 10em;
            margin: 1em 0;
            padding: 15px;
            background-color: #1c1f24;
            outline: 2px solid #cac1a7;
            border-radius: 8px;
            color: #abb2bf;
            font-size: 16px;
            line-height: 1.5;
            resize: vertical;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        textarea:focus {
            outline-color: #c3af79;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        /* Optional: Placeholder text styling */

        textarea::placeholder {
            color: #5c6370;
        }

        .text {
            color: #abb2bf;
            font-size: x-large
        }
    `;

    render() {

        if (this.editable) {
            return html`
                <textarea>${this.value}</textarea>
            `;
        }

        return html`<p class="text">${this.value}</p>`

    }
}

customElements.define('page-text-block', PageTextBlock);