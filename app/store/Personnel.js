Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    autoLoad:true,

    model: 'MyApp.model.Personnel',

    proxy: {
        type: 'jsonp',
        api:{
            read :"http://localhost/MyApp_php/employess.php"
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
