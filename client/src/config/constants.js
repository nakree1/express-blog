export const REQUEST = 'request';
export const SUCCESS = 'success';
export const FAILURE = 'failure';
export const NONE = 'none';

export const FILE_MIME = {
  IMAGES: ['image/jpeg', 'image/png', 'image/webp'],
  DOCUMENTS: [
    'application/pdf',
    'text/csv',
    'text/plain',
    'application/msword', //.doc
    'application/vnd.ms-excel', //.xls
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', //.docx
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' //.xlsx
  ],
  ARCHIVES: ['application/zip', 'application/x-7z-compressed', 'application/x-rar-compressed']
};

export const FILE_SIZE = {
  AVATAR: 5242880, // 5mb
  DEFAULT: 10485760 // 10mb
};
