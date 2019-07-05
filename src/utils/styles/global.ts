import { injectGlobal, css } from 'emotion';
import { fontSize, fontWeight } from './sizes';
import colors from './colors';
import mq, { breakpoints } from './media';

export default injectGlobal`
    html,
    body {
        height: 100%;
    }

    body {
        font-size: ${fontSize.base};
        color: ${colors.eclipse};
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    strong {
        font-weight: ${fontWeight.semiBold};
    }

    .container {
        padding: 15px;
        flex: 1;

        @media screen and (min-width: ${breakpoints.large}px) {
          max-width: ${breakpoints.large}px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        };
    
        .el-loading-spinner {
            margin-top: 0 !important;
        }
    }
    
    .content {
        display: flex;
    }
    
    .page-full-height {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        overflow: hidden;
    }
    
    .el-button {
        &:hover, &:focus {
            color: ${colors.primary};
            border-color: ${colors.primary};
        }
    }
    
    .el-input__inner {
        &:hover, &:focus {
            border-color: ${colors.primary};
        }
    }
    
    .el-dialog__headerbtn:hover .el-dialog__close {
        color: ${colors.eclipse};
    }
    
    .package-list-items {
        width: 100%;
    }
  
`;
