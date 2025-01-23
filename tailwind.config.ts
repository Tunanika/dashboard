import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'onyx': {
                    '50': '#f5f6f6',
                    '100': '#e4e8e9',
                    '200': '#ccd3d5',
                    '300': '#a8b4b8',
                    '400': '#7d8e93',
                    '500': '#627378',
                    '600': '#546066',
                    '700': '#485256',
                    '800': '#40474a',
                    '900': '#393e41',
                    '950': '#232629',
                },
                'cinnabar': {
                    '50': '#fef4f2',
                    '100': '#fde7e3',
                    '200': '#fdd2cb',
                    '300': '#fab2a7',
                    '400': '#f58574',
                    '500': '#e94f37',
                    '600': '#d8412a',
                    '700': '#b53420',
                    '800': '#962e1e',
                    '900': '#7d2c1f',
                    '950': '#44130b',
                },
                'ivory': {
                    '50': '#f6f7eb',
                    '100': '#ebeed7',
                    '200': '#d8dcab',
                    '300': '#c7ca7f',
                    '400': '#bebe61',
                    '500': '#b2a94e',
                    '600': '#9d8d42',
                    '700': '#836f3a',
                    '800': '#6c5934',
                    '900': '#5a4a2d',
                    '950': '#322816',
                },
                'steel-blue': {
                    '50': '#f3f7fc',
                    '100': '#e6eef8',
                    '200': '#c7dcf0',
                    '300': '#96bfe3',
                    '400': '#5e9dd2',
                    '500': '#3f88c5',
                    '600': '#2967a0',
                    '700': '#225282',
                    '800': '#20466c',
                    '900': '#1f3c5b',
                    '950': '#15263c',
                },
                'keppel': {
                    '50': '#f2fbf8',
                    '100': '#d3f4eb',
                    '200': '#a7e8d8',
                    '300': '#73d5bf',
                    '400': '#44bba4',
                    '500': '#2ca08b',
                    '600': '#218072',
                    '700': '#1e675c',
                    '800': '#1c534b',
                    '900': '#1c4540',
                    '950': '#0a2926',
                },
            }
        }
    }
}
