import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],   
  format: ['esm', 'cjs'],   
  outDir: 'lib', 
  clean: true,          
  dts: true,                
  sourcemap: true,         
  minify: true,             
  shims: true,               
});
