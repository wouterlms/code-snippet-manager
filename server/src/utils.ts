const sass = require('sass');
import * as ts from 'typescript';

class Utils {
  compileSass(_sass: string): string {
    try {
      const result: any = sass.renderSync({
        data: _sass,
      });

      return result.css.toString();
    } catch (err) {
      return '';
    }
  }

  compileTypescript(typescript: string): string {
    const result = ts.transpileModule(typescript, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
      },
    });

    return result.outputText;
  }
}

export default new Utils();
