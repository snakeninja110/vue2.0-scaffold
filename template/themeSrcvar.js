module.exports = `/* Element Chalk Variables */

/* Transition
-------------------------- */
$--all-transition: all .3s cubic-bezier(.645,.045,.355,1) !default;
$--fade-transition: opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) !default;
$--fade-linear-transition: opacity 200ms linear !default;
$--md-fade-transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) !default;
$--border-transition-base: border-color .2s cubic-bezier(.645,.045,.355,1) !default;
$--color-transition-base: color .2s cubic-bezier(.645,.045,.355,1) !default;

/* Colors
-------------------------- */
$--color-white: #fff !default;
$--color-black: #000 !default;

$--color-primary: red !default;
$--color-primary-light-1: mix($--color-white, $--color-primary, 10%) !default; /* 53a8ff */
$--color-primary-light-2: mix($--color-white, $--color-primary, 20%) !default; /* 66b1ff */
$--color-primary-light-3: mix($--color-white, $--color-primary, 30%) !default; /* 79bbff */
$--color-primary-light-4: mix($--color-white, $--color-primary, 40%) !default; /* 8cc5ff */
$--color-primary-light-5: mix($--color-white, $--color-primary, 50%) !default; /* a0cfff */
$--color-primary-light-6: mix($--color-white, $--color-primary, 60%) !default; /* b3d8ff */
$--color-primary-light-7: mix($--color-white, $--color-primary, 70%) !default; /* c6e2ff */
$--color-primary-light-8: mix($--color-white, $--color-primary, 80%) !default; /* d9ecff */
$--color-primary-light-9: mix($--color-white, $--color-primary, 90%) !default; /* ecf5ff */

$--color-success: #67c23a !default;
$--color-warning: #e6a23c !default;
$--color-danger: #f56c6c !default;
$--color-info: #909399 !default;

$--color-success-light: mix($--color-white, $--color-success, 80%) !default;
$--color-warning-light: mix($--color-white, $--color-warning, 80%) !default;
$--color-danger-light: mix($--color-white, $--color-danger, 80%) !default;
$--color-info-light: mix($--color-white, $--color-info, 80%) !default;

$--color-success-lighter: mix($--color-white, $--color-success, 90%) !default;
$--color-warning-lighter: mix($--color-white, $--color-warning, 90%) !default;
$--color-danger-lighter: mix($--color-white, $--color-danger, 90%) !default;
$--color-info-lighter: mix($--color-white, $--color-info, 90%) !default;

$--color-text-primary: #303133 !default;
$--color-text-regular: #606266 !default;
$--color-text-secondary: #909399 !default;
$--color-text-placeholder: #c0c4cc !default;

/* Link
-------------------------- */
$--link-color: $--color-primary-light-2 !default;
$--link-hover-color: $--color-primary !default;

/* Background
-------------------------- */
$--background-color-base: #f5f7fa !default;

/* Border
-------------------------- */
$--border-width-base: 1px !default;
$--border-style-base: solid !default;
$--border-color-base: #dcdfe6 !default;
$--border-color-light: #e4e7ed !default;
$--border-color-lighter: #ebeef5 !default;
$--border-color-extra-light: #f2f6fc !default;
$--border-color-hover: $--color-text-placeholder !default;
$--border-base: $--border-width-base $--border-style-base $--border-color-base !default;
$--border-radius-base: 4px !default;
$--border-radius-small: 2px !default;
$--border-radius-circle: 100% !default;

/* Box-shadow
-------------------------- */
$--box-shadow-base: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) !default;
$--box-shadow-dark: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12) !default;
$--box-shadow-light: 0 2px 12px 0 rgba(0, 0, 0, 0.1) !default;

/* Fill
-------------------------- */
$--fill-base: $--color-white !default;

/* Font
-------------------------- */
// $--font-path: 'fonts' !default;
/* 改变 icon 字体路径变量，必需 */
$--font-path: '~element-ui/lib/theme-chalk/fonts';
$--font-size-base: 14px !default;
$--font-size-small: 13px !default;
$--font-size-large: 18px !default;
$--font-color-disabled-base: #bbb !default;
$--font-weight-primary: 500 !default;
$--font-line-height-primary: 24px !default;

/* Size
-------------------------- */
$--size-base: 14px !default;

/* z-index
-------------------------- */
$--index-normal: 1 !default;
$--index-top: 1000 !default;
$--index-popper: 2000 !default;

/* Disable base
-------------------------- */
$--disabled-fill-base: $--background-color-base !default;
$--disabled-color-base: $--color-text-placeholder !default;
$--disabled-border-base: $--border-color-light !default;

/* Icon
-------------------------- */
$--icon-color: #666 !default;
$--icon-color-base: $--color-info !default;

/* Checkbox
-------------------------- */
$--checkbox-font-size: 14px !default;
$--checkbox-font-weight: $--font-weight-primary !default;
$--checkbox-color: $--color-text-regular !default;
$--checkbox-input-height: 14px !default;
$--checkbox-input-width: 14px !default;
$--checkbox-input-border-radius: $--border-radius-small !default;
$--checkbox-input-fill: $--color-white !default;
$--checkbox-input-border: $--border-base !default;
$--checkbox-input-border-color: $--border-color-base !default;
$--checkbox-icon-color: $--color-white !default;

$--checkbox-disabled-input-border-color: $--border-color-base !default;
$--checkbox-disabled-input-fill: #edf2fc !default;
$--checkbox-disabled-icon-color: $--color-text-placeholder !default;

$--checkbox-disabled-checked-input-fill: $--border-color-extra-light !default;
$--checkbox-disabled-checked-input-border-color: $--border-color-base !default;
$--checkbox-disabled-checked-icon-color: $--color-text-placeholder !default;

$--checkbox-checked-text-color: $--color-primary !default;
$--checkbox-checked-input-border-color: $--color-primary !default;
$--checkbox-checked-input-fill: $--color-primary !default;
$--checkbox-checked-icon-color: $--fill-base !default;

$--checkbox-input-border-color-hover: $--color-primary !default;

$--checkbox-bordered-height: 40px !default;
$--checkbox-bordered-padding: 9px 20px 9px 10px !default;
$--checkbox-bordered-medium-padding: 7px 20px 7px 10px !default;
$--checkbox-bordered-small-padding: 5px 15px 5px 10px !default;
$--checkbox-bordered-mini-padding: 3px 15px 3px 10px !default;
$--checkbox-bordered-medium-input-height: 14px !default;
$--checkbox-bordered-medium-input-width: 14px !default;
$--checkbox-bordered-medium-height: 36px !default;
$--checkbox-bordered-small-input-height: 12px !default;
$--checkbox-bordered-small-input-width: 12px !default;
$--checkbox-bordered-small-height: 32px !default;
$--checkbox-bordered-mini-input-height: 12px !default;
$--checkbox-bordered-mini-input-width: 12px !default;
$--checkbox-bordered-mini-height: 28px !default;

$--checkbox-button-font-size: $--font-size-base !default;
$--checkbox-button-checked-fill: $--color-primary !default;
$--checkbox-button-checked-color: $--color-white !default;
$--checkbox-button-checked-border-color: $--color-primary !default;



/* Radio
-------------------------- */
$--radio-font-size: 14px !default;
$--radio-font-weight: $--font-weight-primary !default;
$--radio-color: $--color-text-regular !default;
$--radio-input-height: 14px !default;
$--radio-input-width: 14px !default;
$--radio-input-border-radius: $--border-radius-circle !default;
$--radio-input-fill: $--color-white !default;
$--radio-input-border: $--border-base !default;
$--radio-input-border-color: $--border-color-base !default;
$--radio-icon-color: $--color-white !default;

$--radio-disabled-input-border-color: $--disabled-border-base !default;
$--radio-disabled-input-fill: $--disabled-fill-base !default;
$--radio-disabled-icon-color: $--disabled-fill-base !default;

$--radio-disabled-checked-input-border-color: $--disabled-border-base !default;
$--radio-disabled-checked-input-fill: $--disabled-fill-base !default;
$--radio-disabled-checked-icon-color: $--color-text-placeholder !default;

$--radio-checked-text-color: $--color-primary !default;
$--radio-checked-input-border-color: $--color-primary !default;
$--radio-checked-input-fill: $--color-white !default;
$--radio-checked-icon-color: $--color-primary !default;

$--radio-input-border-color-hover: $--color-primary !default;

$--radio-bordered-height: 40px !default;
$--radio-bordered-padding: 12px 20px 0 10px !default;
$--radio-bordered-medium-padding: 10px 20px 0 10px !default;
$--radio-bordered-small-padding: 8px 15px 0 10px !default;
$--radio-bordered-mini-padding: 6px 15px 0 10px !default;
$--radio-bordered-medium-input-height: 14px !default;
$--radio-bordered-medium-input-width: 14px !default;
$--radio-bordered-medium-height: 36px !default;
$--radio-bordered-small-input-height: 12px !default;
$--radio-bordered-small-input-width: 12px !default;
$--radio-bordered-small-height: 32px !default;
$--radio-bordered-mini-input-height: 12px !default;
$--radio-bordered-mini-input-width: 12px !default;
$--radio-bordered-mini-height: 28px !default;

$--radio-button-font-size: $--font-size-base !default;
$--radio-button-checked-fill: $--color-primary !default;
$--radio-button-checked-color: $--color-white !default;
$--radio-button-checked-border-color: $--color-primary !default;
$--radio-button-disabled-checked-fill: $--border-color-extra-light !default;

/* Select
-------------------------- */
$--select-border-color-hover: $--border-color-hover !default;
$--select-disabled-border: $--disabled-border-base !default;
$--select-font-size: $--font-size-base !default;
$--select-close-hover-color: $--color-text-secondary !default;

$--select-input-color: $--color-text-placeholder !default;
$--select-multiple-input-color: #666 !default;
$--select-input-focus-background: $--color-primary !default;
$--select-input-font-size: 14px !default;

$--select-option-color: $--color-text-regular !default;
$--select-option-disabled-color: $--color-text-placeholder !default;
$--select-option-disabled-background: $--color-white !default;
$--select-option-height: 34px !default;
$--select-option-hover-background: $--background-color-base !default;
$--select-option-selected: $--color-primary !default;
$--select-option-selected-hover: $--background-color-base !default;

$--select-group-color: $--color-info !default;
$--select-group-height: 30px !default;
$--select-group-font-size: 12px !default;

$--select-dropdown-background: $--color-white !default;
$--select-dropdown-shadow: $--box-shadow-light !default;
$--select-dropdown-empty-color: #999 !default;
$--select-dropdown-max-height: 274px !default;
$--select-dropdown-padding: 6px 0 !default;
$--select-dropdown-empty-padding: 10px 0 !default;
$--select-dropdown-border: solid 1px $--border-color-light !default;

/* Alert
-------------------------- */
$--alert-padding: 8px 16px !default;
$--alert-border-radius: $--border-radius-base !default;
$--alert-title-font-size: 13px !default;
$--alert-description-font-size: 12px !default;
$--alert-close-font-size: 12px !default;
$--alert-close-customed-font-size: 13px !default;

$--alert-success-color: $--color-success-lighter !default;
$--alert-info-color: $--color-info-lighter !default;
$--alert-warning-color: $--color-warning-lighter !default;
$--alert-danger-color: $--color-danger-lighter !default;

$--alert-icon-size: 16px !default;
$--alert-icon-large-size: 28px !default;

/* Message Box
-------------------------- */
$--msgbox-width: 420px !default;
$--msgbox-border-radius: 4px !default;
$--msgbox-font-size: $--font-size-large !default;
$--msgbox-content-font-size: $--font-size-base !default;
$--msgbox-content-color: $--color-text-regular !default;
$--msgbox-error-font-size: 12px !default;
$--msgbox-padding-primary: 15px !default;

$--msgbox-success-color: $--color-success !default;
$--msgbox-info-color: $--color-info !default;
$--msgbox-warning-color: $--color-warning !default;
$--msgbox-danger-color: $--color-danger !default;

/* Message
-------------------------- */
$--message-shadow: $--box-shadow-base !default;
$--message-min-width: 380px !default;
$--message-background-color: #edf2fc !default;
$--message-padding: 15px 15px 15px 20px !default;
$--message-content-color: $--color-text-regular !default;
$--message-close-color: $--color-text-placeholder !default;
$--message-close-size: 16px !default;
$--message-close-hover-color: $--color-text-secondary !default;

$--message-success-color: $--color-success !default;
$--message-info-color: $--color-info !default;
$--message-warning-color: $--color-warning !default;
$--message-danger-color: $--color-danger !default;

/* Notification
-------------------------- */
$--notification-width: 330px !default;
$--notification-padding: 14px 26px 14px 13px !default;
$--notification-radius: 8px !default;
$--notification-shadow: $--box-shadow-light !default;
$--notification-border-color: $--border-color-lighter !default;
$--notification-icon-size: 24px !default;
$--notification-close-font-size: $--message-close-size !default;
$--notification-group-margin: 13px !default;
$--notification-font-size: $--font-size-base !default;
$--notification-color: $--color-text-regular !default;
$--notification-title-font-size: 16px !default;
$--notification-title-color: $--color-text-primary !default;

$--notification-close-color: $--color-text-secondary !default;
$--notification-close-hover-color: $--color-text-regular !default;

$--notification-success-color: $--color-success !default;
$--notification-info-color: $--color-info !default;
$--notification-warning-color: $--color-warning !default;
$--notification-danger-color: $--color-danger !default;

/* Input
-------------------------- */
$--input-font-size: $--font-size-base !default;
$--input-color: $--color-text-regular !default;
$--input-width: 140px !default;
$--input-height: 40px !default;
$--input-border: $--border-base !default;
$--input-border-color: $--border-color-base !default;
$--input-border-radius: $--border-radius-base !default;
$--input-border-color-hover: $--border-color-hover !default;
$--input-fill: $--color-white !default;
$--input-fill-disabled: $--disabled-fill-base !default;
$--input-color-disabled: $--font-color-disabled-base !default;
$--input-icon-color: $--color-text-placeholder !default;
$--input-placeholder-color: $--color-text-placeholder !default;
$--input-max-width: 314px !default;

$--input-hover-border: $--border-color-hover !default;
$--input-clear-hover-color: $--color-text-secondary !default;

$--input-focus-border: $--color-primary !default;
$--input-focus-fill: $--color-white !default;

$--input-disabled-fill: $--disabled-fill-base !default;
$--input-disabled-border: $--disabled-border-base !default;
$--input-disabled-color: $--disabled-color-base !default;
$--input-disabled-placeholder-color: $--color-text-placeholder !default;

$--input-medium-font-size: 14px !default;
$--input-medium-height: 36px !default;

$--input-small-font-size: 13px !default;
$--input-small-height: 32px !default;

$--input-mini-font-size: 12px !default;
$--input-mini-height: 28px !default;

/* Cascader
-------------------------- */
$--cascader-menu-fill: $--fill-base !default;
$--cascader-menu-font-size: $--font-size-base !default;
$--cascader-menu-radius: $--border-radius-base !default;
$--cascader-menu-border: $--border-base !default;
$--cascader-menu-border-color: $--border-color-base !default;
$--cascader-menu-border-width: $--border-width-base !default;
$--cascader-menu-color: $--color-text-regular !default;
$--cascader-menu-option-color-active: $--color-text-secondary !default;
$--cascader-menu-option-fill-active: rgba($--color-text-secondary, 0.12) !default;
$--cascader-menu-option-color-hover: $--color-text-regular !default;
$--cascader-menu-option-fill-hover: rgba($--color-text-primary, 0.06) !default;
$--cascader-menu-option-color-disabled: #999 !default;
$--cascader-menu-option-fill-disabled: rgba($--color-black, 0.06) !default;
$--cascader-menu-option-empty-color: #666 !default;
$--cascader-menu-group-color: #999 !default;
$--cascader-menu-shadow: 0 1px 2px rgba($--color-black, 0.14), 0 0 3px rgba($--color-black, 0.14) !default;
$--cascader-menu-option-pinyin-color: #999 !default;
$--cascader-menu-submenu-shadow: 1px 1px 2px rgba($--color-black, 0.14), 1px 0 2px rgba($--color-black, 0.14) !default;

/* Group
-------------------------- */
$--group-option-flex: 0 0 (1/5) * 100% !default;
$--group-option-offset-bottom: 12px !default;
$--group-option-fill-hover: rgba($--color-black, 0.06) !default;
$--group-title-color: $--color-black !default;
$--group-title-font-size: $--font-size-base !default;
$--group-title-width: 66px !default;

/* Tab
-------------------------- */
$--tab-font-size: $--font-size-base !default;
$--tab-border-line: 1px solid #e4e4e4 !default;
$--tab-header-color-active: $--color-text-secondary !default;
$--tab-header-color-hover: $--color-text-regular !default;
$--tab-header-color: $--color-text-regular !default;
$--tab-header-fill-active: rgba($--color-black, 0.06) !default;
$--tab-header-fill-hover: rgba($--color-black, 0.06) !default;
$--tab-vertical-header-width: 90px !default;
$--tab-vertical-header-count-color: $--color-white !default;
$--tab-vertical-header-count-fill: $--color-text-secondary !default;

/* Button
-------------------------- */
$--button-font-size: 14px !default;
$--button-font-weight: $--font-weight-primary !default;
$--button-border-radius: $--border-radius-base !default;
$--button-padding-vertical: 12px !default;
$--button-padding-horizontal: 20px !default;

$--button-medium-font-size: 14px !default;
$--button-medium-border-radius: $--border-radius-base !default;
$--button-medium-padding-vertical: 10px !default;
$--button-medium-padding-horizontal: 20px !default;

$--button-small-font-size: 12px !default;
$--button-small-border-radius: #{$--border-radius-base - 1} !default;
$--button-small-padding-vertical: 9px !default;
$--button-small-padding-horizontal: 15px !default;

$--button-mini-font-size: 12px !default;
$--button-mini-border-radius: #{$--border-radius-base - 1} !default;
$--button-mini-padding-vertical: 7px !default;
$--button-mini-padding-horizontal: 15px !default;

$--button-default-color: $--color-text-regular !default;
$--button-default-fill: $--color-white !default;
$--button-default-border: $--border-color-base !default;

$--button-disabled-color: $--color-text-placeholder !default;
$--button-disabled-fill: $--color-white !default;
$--button-disabled-border: $--border-color-lighter !default;

$--button-primary-border: $--color-primary !default;
$--button-primary-color: $--color-white !default;
$--button-primary-fill: $--color-primary !default;

$--button-success-border: $--color-success !default;
$--button-success-color: $--color-white !default;
$--button-success-fill: $--color-success !default;

$--button-warning-border: $--color-warning !default;
$--button-warning-color: $--color-white !default;
$--button-warning-fill: $--color-warning !default;

$--button-danger-border: $--color-danger !default;
$--button-danger-color: $--color-white !default;
$--button-danger-fill: $--color-danger !default;

$--button-info-border: $--color-info !default;
$--button-info-color: $--color-white !default;
$--button-info-fill: $--color-info !default;

$--button-hover-tint-percent: 20% !default;
$--button-active-shade-percent: 10% !default;


/* cascader
-------------------------- */
$--cascader-height: 200px !default;

/* Switch
-------------------------- */
$--switch-on-color: $--color-primary !default;
$--switch-off-color: $--border-color-base !default;
$--switch-disabled-color: $--border-color-lighter !default;
$--switch-disabled-text-color: $--color-text-placeholder !default;

$--switch-font-size: $--font-size-base !default;
$--switch-core-border-radius: 10px !default;
$--switch-width: 40px !default;
$--switch-height: 20px !default;
$--switch-button-size: 16px !default;

/* Dialog
-------------------------- */
$--dialog-background-color: $--color-primary-light-4 !default;
$--dialog-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !default;
$--dialog-close-hover-color: $--color-primary !default;
$--dialog-title-font-size: $--font-size-large !default;
$--dialog-font-size: 14px !default;
$--dialog-line-height: $--font-line-height-primary !default;
$--dialog-padding-primary: 20px !default;

/* Table
-------------------------- */
$--table-border-color: $--border-color-lighter !default;
$--table-border: 1px solid $--table-border-color !default;
$--table-text-color: $--color-text-regular !default;
$--table-header-color: $--color-text-secondary !default;
$--table-row-hover-background: $--background-color-base !default;
$--table-current-row-background: $--color-primary-light-9 !default;
$--table-header-background: $--color-white !default;
$--table-footer-background: $--color-text-placeholder !default;
$--table-fixed-box-shadow: 0 0 10px rgba(0, 0, 0, .12) !default;

/* Pagination
-------------------------- */
$--pagination-font-size: 13px !default;
$--pagination-fill: $--color-white !default;
$--pagination-color: $--color-text-primary !default;
$--pagination-border-radius: 3px !default;
$--pagination-button-color: $--color-text-primary !default;
$--pagination-button-width: 35.5px !default;
$--pagination-button-height: 28px !default;
$--pagination-button-disabled-color: $--color-text-placeholder !default;
$--pagination-button-disabled-fill: $--color-white !default;
$--pagination-hover-fill: $--color-primary !default;
$--pagination-hover-color: $--color-white !default;

/* Popover
-------------------------- */
$--popover-fill: $--color-white !default;
$--popover-font-size: $--font-size-base !default;
$--popover-border-color: $--border-color-lighter !default;
$--popover-arrow-size: 6px !default;
$--popover-padding: 12px !default;
$--popover-padding-large: 18px 20px !default;
$--popover-title-font-size: 16px !default;
$--popover-title-color: $--color-text-primary !default;

/* Tooltip
-------------------------- */
$--tooltip-fill: $--color-text-primary !default;
$--tooltip-color: $--color-white !default;
$--tooltip-font-size: 12px !default;
$--tooltip-border-color: $--color-text-primary !default;
$--tooltip-arrow-size: 6px !default;
$--tooltip-padding: 10px !default;

/* Tag
-------------------------- */
$--tag-padding: 0 10px !default;
$--tag-fill: rgba($--color-primary, 0.10) !default;
$--tag-color: $--color-primary !default;
$--tag-border: rgba($--color-primary, 0.20) !default;
$--tag-font-size: 12px !default;
$--tag-border-radius: 4px !default;

$--tag-info-fill: rgba($--color-info, 0.10) !default;
$--tag-info-border: rgba($--color-info, 0.20) !default;
$--tag-info-color: $--color-info !default;

$--tag-primary-fill: rgba($--color-primary, 0.10) !default;
$--tag-primary-border: rgba($--color-primary, 0.20) !default;
$--tag-primary-color: $--color-primary !default;

$--tag-success-fill: rgba($--color-success, 0.10) !default;
$--tag-success-border: rgba($--color-success, 0.20) !default;
$--tag-success-color: $--color-success !default;

$--tag-warning-fill: rgba($--color-warning, 0.10) !default;
$--tag-warning-border: rgba($--color-warning, 0.20) !default;
$--tag-warning-color: $--color-warning !default;

$--tag-danger-fill: rgba($--color-danger, 0.10) !default;
$--tag-danger-border: rgba($--color-danger, 0.20) !default;
$--tag-danger-color: $--color-danger !default;

/* Tree
-------------------------- */
$--tree-node-hover-color: $--background-color-base !default;
$--tree-text-color: $--color-text-regular !default;
$--tree-expand-icon-color: $--color-text-placeholder !default;

/* Dropdown
-------------------------- */
$--dropdown-menu-box-shadow: $--box-shadow-light !default;
$--dropdown-menuItem-hover-fill: $--color-primary-light-9 !default;
$--dropdown-menuItem-hover-color: $--link-color !default;

/* Badge
-------------------------- */
$--badge-fill: $--color-danger !default;
$--badge-radius: 10px !default;
$--badge-font-size: 12px !default;
$--badge-padding: 6px !default;
$--badge-size: 18px !default;

/* Card
--------------------------*/
$--card-border-color: $--border-color-lighter !default;
$--card-border-radius: 4px !default;
$--card-padding: 20px !default;

/* Slider
--------------------------*/
$--slider-main-background-color: $--color-primary !default;
$--slider-runway-background-color: $--border-color-light !default;
$--slider-button-hover-color: mix($--color-primary, black, 97%) !default;
$--slider-stop-background-color: $--color-white !default;
$--slider-disable-color: $--color-text-placeholder !default;

$--slider-margin: 16px 0 !default;
$--slider-border-radius: 3px !default;
$--slider-height: 6px !default;
$--slider-button-size: 16px !default;
$--slider-button-wrapper-size: 36px !default;
$--slider-button-wrapper-offset: -15px !default;

/* Steps
--------------------------*/
$--steps-border-color: $--disabled-border-base !default;
$--steps-border-radius: 4px !default;
$--steps-padding: 20px !default;

/* Menu
--------------------------*/
$--menu-item-color: $--color-text-primary !default;
$--menu-item-fill: $--color-white !default;
$--menu-item-hover-fill: $--color-primary-light-9 !default;

/* Rate
--------------------------*/
$--rate-height: 20px !default;
$--rate-font-size: $--font-size-base !default;
$--rate-icon-size: 18px !default;
$--rate-icon-margin: 6px !default;
$--rate-icon-color: $--color-text-placeholder !default;

/* DatePicker
--------------------------*/
$--datepicker-color: $--color-text-regular !default;
$--datepicker-off-color: $--color-text-placeholder !default;
$--datepicker-header-color: $--color-text-regular !default;
$--datepicker-icon-color: $--color-text-primary !default;
$--datepicker-border-color: $--disabled-border-base !default;
$--datepicker-inner-border-color: #e4e4e4 !default;
$--datepicker-inrange-color: $--border-color-extra-light !default;
$--datepicker-inrange-hover-color: $--border-color-extra-light !default;
$--datepicker-active-color: $--color-primary !default;
$--datepicker-text-hover-color: $--color-primary !default;
$--datepicker-cell-hover-color: #fff !default;

/* Loading
--------------------------*/
$--loading-spinner-size: 42px !default;
$--loading-fullscreen-spinner-size: 50px !default;

/* Scrollbar
--------------------------*/
$--scrollbar-background-color: rgba($--color-text-secondary, .3) !default;
$--scrollbar-hover-background-color: rgba($--color-text-secondary, .5) !default;

/* Carousel
--------------------------*/
$--carousel-arrow-font-size: 12px !default;
$--carousel-arrow-size: 36px !default;
$--carousel-arrow-background: rgba(31, 45, 61, 0.11) !default;
$--carousel-arrow-hover-background: rgba(31, 45, 61, 0.23) !default;
$--carousel-indicator-width: 30px !default;
$--carousel-indicator-height: 2px !default;
$--carousel-indicator-padding-horizontal: 4px !default;
$--carousel-indicator-padding-vertical: 12px !default;
$--carousel-indicator-out-color: $--border-color-hover !default;

/* Collapse
--------------------------*/
$--collapse-border-color: $--border-color-lighter !default;
$--collapse-header-height: 48px !default;
$--collapse-header-padding: 20px !default;
$--collapse-header-fill: $--color-white !default;
$--collapse-header-color: $--color-text-primary !default;
$--collapse-header-size: 13px !default;
$--collapse-content-fill: $--color-white !default;
$--collapse-content-size: 13px !default;
$--collapse-content-color: $--color-text-primary !default;

/* Transfer
--------------------------*/
$--transfer-border-color: $--border-color-lighter !default;
$--transfer-border-radius: $--border-radius-base !default;
$--transfer-panel-width: 200px !default;
$--transfer-panel-header-height: 40px !default;
$--transfer-panel-header-background: $--background-color-base !default;
$--transfer-panel-footer-height: 40px !default;
$--transfer-panel-body-height: 246px !default;
$--transfer-item-height: 30px !default;
$--transfer-item-hover-background: $--color-text-secondary !default;
$--transfer-filter-height: 32px !default;

/* Header
  --------------------------*/
$--header-padding: 0 20px !default;

/* Footer
--------------------------*/
$--footer-padding: 0 20px !default;

/* Main
--------------------------*/
$--main-padding: 20px !default;

/* Break-point
--------------------------*/
$--sm: 768px !default;
$--md: 992px !default;
$--lg: 1200px !default;
$--xl: 1920px !default;

$--breakpoints: (
  'xs' : (max-width: $--sm),
  'sm' : (min-width: $--sm),
  'md' : (min-width: $--md),
  'lg' : (min-width: $--lg),
  'xl' : (min-width: $--xl)
);

$--breakpoints-spec: (
  'xs-only' : (max-width: $--sm - 1),
  'sm-and-up' : (min-width: $--sm),
  'sm-only': "(min-width: #{$--sm}) and (max-width: #{$--md} - 1)",
  'sm-and-down': (max-width: $--md - 1),
  'md-and-up' : (min-width: $--md),
  'md-only': "(min-width: #{$--md}) and (max-width: #{$--lg } - 1)",
  'md-and-down': (max-width: $--lg - 1),
  'lg-and-up' : (min-width: $--lg),
  'lg-only': "(min-width: #{$--lg}) and (max-width: #{$--xl } - 1)",
  'lg-and-down': (max-width: $--xl - 1),
  'xl-only' : (min-width: $--xl),
);
`