import { LitElement, html, css, nothing } from 'lit';
import { PageBlock } from './page-block';

export class PageYoutubeBlock extends PageBlock {

    static styles = css`
        :host {
            width: 100%;
        }

        .youtube {
            width: 90%;
            height: 25em;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 1em;
        }

        .youtube > iframe {
            height: 100%;
        }

        .url {
            padding: 10px 15px;
            background-color: #1c1f24;
            outline: 2px solid #cac1a7;
            border-radius: 8px;
            color: #abb2bf;
            font-size: 16px;
            line-height: 1.5;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .url:focus {
            outline-color: #c3af79;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
    `;

    render() {
        if (this.editable) {
            return html`
                <div class="youtube">
                    ${this.editable ? html`<input class="url" value=${this.value} />` : nothing}
                    <iframe src=${this.value}></iframe>
                </div>
            `;
        }

        if (this.compact) {
            return html`<p class="compact">${this.value}</p>`
        }
        
        return html`<p class="text">${this.value}</p>`;
    }
}

customElements.define('page-youtube-block', PageYoutubeBlock);