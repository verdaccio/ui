import { injectGlobal } from 'emotion';
import { fontSize, fontWeight } from './sizes';

export default injectGlobal`
    html,
    body {
        height: 100%;
    }

    body {
        font-size: ${fontSize.base};
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    strong {
        font-weight: ${fontWeight.semiBold};
    }
`;
