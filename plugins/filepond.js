import Vue from 'vue'
import vueFilepond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
// Import the plugin code
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// import FilePondPluginImageEdit from 'filepond-plugin-image-edit'
// import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css'

// import FilePondPluginImageResize from 'filepond-plugin-image-resize'

// import FilePondPluginImageCrop from 'filepond-plugin-image-crop'


//file validation size and type
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

//file download plugin
import FilePondPluginGetFile from 'filepond-plugin-get-file';
import 'filepond-plugin-get-file/dist/filepond-plugin-get-file.min.css';



const FilePond = vueFilepond(
  // FilePondPluginImageResize,
  // FilePondPluginImageCrop,
  FilePondPluginGetFile,
  // FilePondPluginImageEdit,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
)

Vue.component('FilePond', FilePond)
