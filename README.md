# Code Splitting
## Installed Third-party Packages
- yup
- react-router
- react-router-dom
- react-hook-form

## Without Splitting
- main          - 9.78kb
- runtime-main  - 2.33kb
- 3.chunk       - 3.49kb
- 2.chunk       - 259.48kb
- Total         - 275.08kb

## Simple Code Splitting
- main           - 1.81kb
- runtime-main   - 2.41kb
- 6.chunk        - 154.79kb
- 5.chunk        - 104.92kb
- Contacts       - 3.53kb
- 7.chunk        - 3.49kb
- About.chunk    - 2.76kb
- Home.chunk     - 2.75kb
- Total          - 276.47kb

## Code Splitting With Config Overriding
- vendors~main              - 155.34
- vendors~About~Contacts    - 105.21kb
- main                      - 4.17kb
- 8.chunk                   - 3.49kb
- Contacts                  - 2.89kb
- About                     - 2.89kb
- Home                      - 2.75kb
- Modules                   - 632b
- Components                - 849b
- Total                     - 278.19kb