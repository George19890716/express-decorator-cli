import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],   
  format: ['esm', 'cjs'],   
  outDir: 'lib', 
  target: 'es2020',
  clean: true,          
  dts: true,                
  sourcemap: true,         
  minify: true,             
  shims: true,               
});
