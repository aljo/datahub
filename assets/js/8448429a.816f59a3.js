"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8268],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,c=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5097:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),i=["components"],l={title:"Protobuf Schemas",sidebar_label:"Protobuf Schemas",slug:"/metadata-integration/java/datahub-protobuf",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/datahub-protobuf/README.md"},s="Protobuf Schemas",p={unversionedId:"metadata-integration/java/datahub-protobuf/README",id:"metadata-integration/java/datahub-protobuf/README",isDocsHomePage:!1,title:"Protobuf Schemas",description:"The datahub-protobuf module is designed to be used with the Java Emitter, the input is a compiled protobuf binary .protoc files and optionally the corresponding .proto source code. In addition, you can supply the root message in cases where a single protobuf source file includes multiple non-nested messages.",source:"@site/genDocs/metadata-integration/java/datahub-protobuf/README.md",sourceDirName:"metadata-integration/java/datahub-protobuf",slug:"/metadata-integration/java/datahub-protobuf",permalink:"/docs/metadata-integration/java/datahub-protobuf",editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/datahub-protobuf/README.md",tags:[],version:"current",frontMatter:{title:"Protobuf Schemas",sidebar_label:"Protobuf Schemas",slug:"/metadata-integration/java/datahub-protobuf",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/datahub-protobuf/README.md"},sidebar:"overviewSidebar",previous:{title:"Great Expectations",permalink:"/docs/metadata-ingestion/integration_docs/great-expectations"},next:{title:"Python Emitter",permalink:"/docs/metadata-ingestion/as-a-library"}},m=[{value:"Supported Features",id:"supported-features",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Protobuf Compile Options",id:"protobuf-compile-options",children:[],level:3},{value:"Code Example",id:"code-example",children:[],level:3},{value:"Protobuf Extensions",id:"protobuf-extensions",children:[{value:"meta.proto",id:"metaproto",children:[],level:4},{value:"FieldOptions",id:"fieldoptions",children:[],level:4},{value:"MessageOptions",id:"messageoptions",children:[],level:4},{value:"DataHubMetadataType",id:"datahubmetadatatype",children:[{value:"PROPERTY",id:"property",children:[],level:5},{value:"TAG &amp; TAG_LIST",id:"tag--tag_list",children:[],level:5},{value:"TERM",id:"term",children:[],level:5},{value:"OWNER",id:"owner",children:[],level:5},{value:"DOMAIN",id:"domain",children:[],level:5},{value:"DEPRECATION",id:"deprecation",children:[],level:5}],level:4}],level:3}],level:2},{value:"Gradle Integration",id:"gradle-integration",children:[{value:"Usage",id:"usage-1",children:[],level:3}],level:2}],d={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"protobuf-schemas"},"Protobuf Schemas"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-protobuf")," module is designed to be used with the Java Emitter, the input is a compiled protobuf binary ",(0,r.kt)("inlineCode",{parentName:"p"},"*.protoc")," files and optionally the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"*.proto")," source code. In addition, you can supply the root message in cases where a single protobuf source file includes multiple non-nested messages."),(0,r.kt)("h2",{id:"supported-features"},"Supported Features"),(0,r.kt)("p",null,"The following protobuf features are supported and are translated into descriptions, tags, properties and terms on a dataset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* C++/C style code comments on Messages and Fields\n* Nested Types\n* Scalar Values\n* Well Known Type Wrappers (i.e. DoubleValue, FloatValue, StringValue)\n* Enumerations\n* Oneof\n* Maps\n* Extensions\n* Web links\n* Parsing of GitHub team names and slack channel references\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"protobuf-compile-options"},"Protobuf Compile Options"),(0,r.kt)("p",null,"In order to support parsing comments the following option flags should be used during ",(0,r.kt)("inlineCode",{parentName:"p"},"protoc")," compilation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"protoc --include_imports --include_source_info --descriptor_set_out=MyProto.protoc MyProto.proto\n")),(0,r.kt)("h3",{id:"code-example"},"Code Example"),(0,r.kt)("p",null,"Given an input stream of the ",(0,r.kt)("inlineCode",{parentName:"p"},"protoc")," binary and the emitter the minimal code is shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.linkedin.common.FabricType;\nimport com.linkedin.common.AuditStamp;\nimport com.linkedin.common.urn.CorpuserUrn;\nimport datahub.client.rest.RestEmitter;\nimport datahub.protobuf.ProtobufDataset;\n\nRestEmitter emitter;\nInputStream protocInputStream;\n\nAuditStamp auditStamp = new AuditStamp()\n    .setTime(System.currentTimeMillis())\n    .setActor(new CorpuserUrn("datahub"));\n\nProtobufDataset dataset = ProtobufDataset.builder()\n    .setDataPlatformUrn(new DataPlatformUrn("kafka"))\n    .setProtocIn(protocInputStream)\n    .setAuditStamp(auditStamp)\n    .setFabricType(FabricType.DEV)\n    .build();\n\ndataset.getAllMetadataChangeProposals().flatMap(Collection::stream).forEach(mcpw -> emitter.emit(mcpw, null).get());\n')),(0,r.kt)("p",null,"Additionally, the raw protobuf source can be included as well as information to allow parsing of additional references to GitHub and Slack in the source code comments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ProtobufDataset dataset = ProtobufDataset.builder()\n    .setDataPlatformUrn(new DataPlatformUrn("kafka"))\n    .setSchema(" my raw protobuf schema ")\n    .setProtocIn(protocInputStream)\n    .setAuditStamp(auditStamp)\n    .setFabricType(FabricType.DEV)\n    .setGithubOrganization("myOrg")\n    .setSlackTeamId("SLACK123")\n    .build();\n')),(0,r.kt)("h3",{id:"protobuf-extensions"},"Protobuf Extensions"),(0,r.kt)("p",null,"In order to extract even more metadata from the protobuf schema we can extend the FieldOptions and MessageOptions to be able to annotate Messages and Fields with arbitrary information. This information can then be emitted as DataHub primary key information, tags, glossary terms or properties on the dataset."),(0,r.kt)("p",null,"An annotated protobuf schema would look like the following, except for the ",(0,r.kt)("inlineCode",{parentName:"p"},"is_primary_key")," all annotations are configurable for individual needs."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note"),": Extending FieldOptions and MessageOptions does not change the messages themselves. The metadata is not included in messages being sent over the wire."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\nimport "meta.proto";\n\nmessage Department {\n    int32 id = 1 [(meta.fld.is_primary_key) = true];\n    string name = 2;\n}\n\nmessage Person {\n    option(meta.msg.type) = ENTITY;\n    option(meta.msg.classification_enum) = HighlyConfidential;\n    option(meta.msg.team) = "TeamB";\n    option(meta.msg.bool_feature) = true;\n    option(meta.msg.alert_channel) = "#alerts";\n\n    string name = 1 [(meta.fld.classification) = "Classification.HighlyConfidential"];\n\n    int32 id = 2\n    [(meta.fld.is_primary_key) = true];\n\n    string email = 3\n    [(meta.fld.classification_enum) = Confidential];\n    \n    Department dept = 4;\n    \n    string test_coverage = 5\n    [(meta.fld.product_type_bool) = true, (meta.fld.product_type) = "my type", (meta.fld.product_type_enum) = EVENT];\n}\n')),(0,r.kt)("h4",{id:"metaproto"},"meta.proto"),(0,r.kt)("p",null,"In order to use the annotations above, create a proto file called ",(0,r.kt)("inlineCode",{parentName:"p"},"meta.proto"),". Feel free to customize the kinds of metadata and how it is emitted to DataHub for your use cases."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\npackage meta;\n\nimport "google/protobuf/descriptor.proto";\n\n/*\n   This is assigned to metadata fields. It describes how the metadata field should be represented\n   in DataHub. This enum must be used in the `meta` package. Multiple can be used for the same\n   metadata annotation. This allows a single piece of information to be captured in DataHub\n   as a property, tag and/or term.\n\n   Tags can be strings, enums, or booleans\n   Terms can be strings or enums\n   Properties should be strings\n\n*/\nenum DataHubMetadataType {\n  PROPERTY        = 0; // Datahub Custom Property\n  TAG             = 1; // Datahub Tag\n  TAG_LIST        = 2; // Datahub Tags from comma delimited string\n  TERM            = 3; // Datahub Term\n  OWNER           = 4; // Datahub Owner\n  DOMAIN          = 5; // Datahub Domain\n  DEPRECATION     = 6; // Datahub Deprecation\n}\n\n/*\n   Example below: The following is not required for annotation processing. This is an example\n   of creating an annotation using an enum.\n */\n\nenum MetaEnumExample {\n  UNKNOWN = 0;\n  ENTITY = 1;\n  EVENT = 2;\n}\n\n// Assuming Glossary Term defined from bootstrap example\nenum Classification {\n  HighlyConfidential = 0;\n  Confidential = 1;\n  Sensitive = 2;\n}\n')),(0,r.kt)("h4",{id:"fieldoptions"},"FieldOptions"),(0,r.kt)("p",null,"Define possible annotations on fields and how they are exported to DataHub."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"\nmessage fld {\n  extend google.protobuf.FieldOptions {\n    // Required: Mark option field with how to export to DataHub in one or more places.\n    repeated meta.DataHubMetadataType type = 6000;\n\n    /*\n       Examples below: The following is not required for annotation processing.\n     */\n\n    // Set true if the field is a primary key. This works for any boolean with `primary_key` in it.\n    bool is_primary_key = 6010;\n\n    // Extract classification field option as a Term, either works\n    string classification = 6001 [(meta.fld.type) = TERM];\n    meta.Classification classification_enum = 6002 [(meta.fld.type) = TERM];\n\n    // Expose this option as a tag on the field.\n    string product_type = 70004 [(meta.fld.type) = TAG];\n    bool product_type_bool = 70005 [(meta.fld.type) = TAG];\n    meta.MetaEnumExample product_type_enum = 70006 [(meta.fld.type) = TAG];\n  }\n}\n")),(0,r.kt)("h4",{id:"messageoptions"},"MessageOptions"),(0,r.kt)("p",null,"Define possible annotations on messages and how they are exported to DataHub."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"\nmessage msg {\n  extend google.protobuf.MessageOptions {\n    /*\n       Examples below: The following is not required for annotation processing.\n     */\n\n    // Place the classification term at the Message/Dataset level, either string or enum is supported\n    string classification = 4000 [(meta.fld.type) = TERM, (meta.fld.type) = PROPERTY];\n    meta.Classification classification_enum = 4001 [(meta.fld.type) = TERM, (meta.fld.type) = PROPERTY];\n\n    // Attach these Message/Dataset options as a tag and property.\n    string product = 5001 [(meta.fld.type) = TAG, (meta.fld.type) = PROPERTY];\n    string project = 5002 [(meta.fld.type) = TAG, (meta.fld.type) = PROPERTY];\n    string team = 5003 [(meta.fld.type) = OWNER, (meta.fld.type) = PROPERTY];\n\n    string domain = 60003 [(meta.fld.type) = DOMAIN, (meta.fld.type) = PROPERTY];\n    meta.MetaEnumExample type = 60004 [(meta.fld.type) = TAG, (meta.fld.type) = PROPERTY];\n    bool bool_feature = 60005 [(meta.fld.type) = TAG];\n    string alert_channel = 60007 [(meta.fld.type) = PROPERTY];\n\n    repeated string deprecation_note = 60008 [(meta.fld.type) = DEPRECATION, (meta.fld.type) = PROPERTY];\n    uint64 deprecation_time          = 60009 [(meta.fld.type) = DEPRECATION, (meta.fld.type) = PROPERTY];\n  }\n}\n")),(0,r.kt)("h4",{id:"datahubmetadatatype"},"DataHubMetadataType"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"DataHubMetadataType"),(0,r.kt)("th",{parentName:"tr",align:null},"String"),(0,r.kt)("th",{parentName:"tr",align:null},"Bool"),(0,r.kt)("th",{parentName:"tr",align:null},"Enum"),(0,r.kt)("th",{parentName:"tr",align:null},"Repeated"),(0,r.kt)("th",{parentName:"tr",align:null},"Uint64"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PROPERTY"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TAG"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TAG_LIST"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TERM"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OWNER"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOMAIN"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DEPRECATION"),(0,r.kt)("td",{parentName:"tr",align:null},"X (notes)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"X (notes)"),(0,r.kt)("td",{parentName:"tr",align:null},"X (time)")))),(0,r.kt)("h5",{id:"property"},"PROPERTY"),(0,r.kt)("p",null,"Custom properties can be captured as key/value pairs where the protobuf option name is the key and the option value is the option's value."),(0,r.kt)("p",null,"For example, generating a custom property with key ",(0,r.kt)("inlineCode",{parentName:"p"},"prop1")," and value ",(0,r.kt)("inlineCode",{parentName:"p"},"value1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'   message msg {\n     extend google.protobuf.MessageOptions {\n       string prop1 = 5000 [(meta.fld.type) = PROPERTY];\n    }\n  }\n  \n  message Message {\n    option(meta.msg.prop1) = "value1";\n  }\n')),(0,r.kt)("p",null,"Booleans are converted to a value of either ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"   message msg {\n     extend google.protobuf.MessageOptions {\n       bool prop1 = 5000 [(meta.fld.type) = PROPERTY];\n    }\n  }\n  \n  message Message {\n    option(meta.msg.prop1) = true;\n  }\n")),(0,r.kt)("p",null,"Enum values are similarly converted to their string representation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"   enum MetaEnumExample {\n     UNKNOWN = 0;\n     ENTITY = 1;\n     EVENT = 2;\n   }\n\n   message msg {\n     extend google.protobuf.MessageOptions {\n       MetaEnumExample prop1 = 5000 [(meta.fld.type) = PROPERTY];\n    }\n  }\n  \n  message Message {\n    option(meta.msg.prop1) = ENTITY;\n  }\n")),(0,r.kt)("p",null,"Repeated values will be collected and the value will be stored as a serialized json array. The following example would result in the value of ",(0,r.kt)("inlineCode",{parentName:"p"},'["a","b","c"]'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'   message msg {\n     extend google.protobuf.MessageOptions {\n       repeated string prop1 = 5000 [(meta.fld.type) = PROPERTY];\n    }\n  }\n  \n  message Message {\n    option(meta.msg.prop1) = "a";\n    option(meta.msg.prop1) = "b";\n    option(meta.msg.prop1) = "c";\n  }\n')),(0,r.kt)("h5",{id:"tag--tag_list"},"TAG & TAG_LIST"),(0,r.kt)("p",null,"The tag list assumes a string that contains the comma delimited values of the tags. In the example below, tags would be added as ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"c"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'   message msg {\n     extend google.protobuf.MessageOptions {\n       string tags = 5000 [(meta.fld.type) = TAG_LIST];\n    }\n  }\n  \n  message Message {\n    option(meta.msg.tags) = "a, b, c";\n  }\n')),(0,r.kt)("p",null,"Tags could also be represented as separate boolean options. Only the ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," options result in tags. In this example, a single tag of ",(0,r.kt)("inlineCode",{parentName:"p"},"tagA")," would be added to the dataset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"   message msg {\n     extend google.protobuf.MessageOptions {\n       bool tagA = 5000 [(meta.fld.type) = TAG];\n       bool tagB = 5001 [(meta.fld.type) = TAG];\n    }\n  }\n  \n  message Message {\n    option(meta.msg.tagA) = true;\n    option(meta.msg.tagB) = false;\n  }\n")),(0,r.kt)("p",null,"Alternatively, tags can be separated into different fields with the option name as a dot delimited prefix. The following would produce two tags with values of ",(0,r.kt)("inlineCode",{parentName:"p"},"tagA.a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tagB.a"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'   message msg {\n     extend google.protobuf.MessageOptions {\n       string tagA = 5000 [(meta.fld.type) = TAG];\n       string tagB = 5001 [(meta.fld.type) = TAG];\n    }\n  }\n  \n  message Message {\n    option(meta.msg.tagA) = "a";\n    option(meta.msg.tagB) = "a";\n  }\n')),(0,r.kt)("p",null,"The dot delimited prefix also works with enum types where the prefix is the enum type name. In this example two tags are created, ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaEnumExample.ENTITY"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"  enum MetaEnumExample {\n    UNKNOWN = 0;\n    ENTITY = 1;\n    EVENT = 2;\n  }\n\n   message msg {\n     extend google.protobuf.MessageOptions {\n       MetaEnumExample tag = 5000 [(meta.fld.type) = TAG];\n    }\n  }\n  \n  message Message {\n    option(meta.msg.tag) = ENTITY;\n  }\n")),(0,r.kt)("p",null,"In addition, tags can be added to fields as well as messages. The following is a consolidated example for all the possible tag options on fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'  enum MetaEnumExample {\n    UNKNOWN = 0;\n    ENTITY = 1;\n    EVENT = 2;\n  }\n\n   message fld {\n     extend google.protobuf.FieldOptions {\n       string tags             = 6000 [(meta.fld.type) = TAG_LIST];\n       string tagString        = 6001 [(meta.fld.type) = TAG];\n       bool tagBool            = 6002 [(meta.fld.type) = TAG];\n       MetaEnumExample tagEnum = 6003 [(meta.fld.type) = TAG];\n    }\n  }\n  \n  message Message {\n    uint32 my_field = 1\n        [(meta.fld.tags) = "a, b, c",\n         (meta.fld.tagString) = "myTag",\n         (meta.fld.tagBool) = true,\n         (meta.fld.tagEnum) = ENTITY];\n  }\n')),(0,r.kt)("h5",{id:"term"},"TERM"),(0,r.kt)("p",null,"Terms are specified by either a fully qualified string value or an enum where the enum type's name is the first element in the fully qualified term name."),(0,r.kt)("p",null,"The following example shows both methods, either of which would result in the term ",(0,r.kt)("inlineCode",{parentName:"p"},"Classification.HighlyConfidential")," being applied."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'   enum Classification {\n     HighlyConfidential = 0;\n     Confidential = 1;\n     Sensitive = 2;\n   }\n\n   message msg {\n     extend google.protobuf.MessageOptions {\n       Classification term = 5000 [(meta.fld.type) = TERM];\n       string class = 5001 [(meta.fld.type) = TERM];\n    }\n  }\n  \n  message Message {\n    option(meta.msg.term) = HighlyConfidential;\n    option(meta.msg.class) = "Classification.HighlyConfidential";\n  }\n')),(0,r.kt)("p",null,"The following is a consolidated example for the possible field level term options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'   enum Classification {\n    HighlyConfidential = 0;\n    Confidential = 1;\n    Sensitive = 2;\n  }\n\n   message fld {\n     extend google.protobuf.FieldOptions {\n       Classification term = 5000 [(meta.fld.type) = TERM];\n       string class = 5001 [(meta.fld.type) = TERM];\n    }\n  }\n  \n  message Message {\n    uint32 my_field = 1\n        [(meta.fld.term) = HighlyConfidential,\n         (meta.fld.class) = "Classification.HighlyConfidential"];\n  }\n')),(0,r.kt)("h5",{id:"owner"},"OWNER"),(0,r.kt)("p",null,"One or more owners can be specified and can be any combination of ",(0,r.kt)("inlineCode",{parentName:"p"},"corpUser")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"corpGroup")," entities. The default entity type is ",(0,r.kt)("inlineCode",{parentName:"p"},"corpGroup"),". By default, the ownership type is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"producer"),", see the second example for setting the ownership type."),(0,r.kt)("p",null,"The following example assigns the ownership to a group of ",(0,r.kt)("inlineCode",{parentName:"p"},"myGroup")," and a user called ",(0,r.kt)("inlineCode",{parentName:"p"},"myName"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'   message msg {\n     extend google.protobuf.MessageOptions {\n       repeated string owner = 5000 [(meta.fld.type) = OWNER];\n    }\n  }\n  \n  message Message {\n    option(meta.msg.owner) = "corpUser:myName";\n    option(meta.msg.owner) = "myGroup";\n  }\n')),(0,r.kt)("p",null,"In this example, the option name determines the ownership type. User ",(0,r.kt)("inlineCode",{parentName:"p"},"myName")," is assigned as the Technical Owner and ",(0,r.kt)("inlineCode",{parentName:"p"},"myGroup")," as the Data Steward."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'   message msg {\n     extend google.protobuf.MessageOptions {\n       repeated string technical_owner = 5000 [(meta.fld.type) = OWNER];\n       repeated string data_steward = 5001 [(meta.fld.type) = OWNER];\n    }\n  }\n  \n  message Message {\n    option(meta.msg.technical_owner) = "corpUser:myName";\n    option(meta.msg.data_steward) = "myGroup";\n  }\n')),(0,r.kt)("h5",{id:"domain"},"DOMAIN"),(0,r.kt)("p",null,"Set the domain id for the dataset. The domain should exist already. Note that the ",(0,r.kt)("em",{parentName:"p"},"id")," of the domain is the value. If not specified during domain creation it is likely a random string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'   message msg {\n     extend google.protobuf.MessageOptions {\n       string domain = 5000 [(meta.fld.type) = DOMAIN];\n    }\n  }\n  \n  message Message {\n    option(meta.msg.domain) = "engineering";\n  }\n')),(0,r.kt)("h5",{id:"deprecation"},"DEPRECATION"),(0,r.kt)("p",null,'Deprecation of fields and messages are natively supported by protobuf options.\nThe standard "Deprecation" aspect is used for a dataset generated from a protobuf ',(0,r.kt)("inlineCode",{parentName:"p"},"message"),".\nField deprecation adds a tag with the following urn ",(0,r.kt)("inlineCode",{parentName:"p"},"urn:li:tag:deprecated")," (red, #FF000)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'   message msg {\n     extend google.protobuf.MessageOptions {\n       repeated string deprecation_note = 5620 [(meta.fld.type) = DEPRECATION];\n       uint64 deprecation_time          = 5621 [(meta.fld.type) = DEPRECATION];\n    }\n  }\n  \n  message Message {\n    option deprecated = true;\n    option (meta.msg.deprecation_note) = "Deprecated for this other message.";\n    option (meta.msg.deprecation_note) = "Drop in replacement.";\n    option (meta.msg.deprecation_time) = 1649689387;\n  }\n')),(0,r.kt)("p",null,"The field deprecation tag works without definition in ",(0,r.kt)("inlineCode",{parentName:"p"},"meta.proto")," using the native protobuf option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message Message {\n  uint32 my_field = 1 [deprecated = true];\n}\n")),(0,r.kt)("h2",{id:"gradle-integration"},"Gradle Integration"),(0,r.kt)("p",null,"An example application is included which works with the ",(0,r.kt)("inlineCode",{parentName:"p"},"protobuf-gradle-plugin"),", see the standalone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/datahub-protobuf-example"},"example project"),"."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,"Using the "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export DATAHUB_API=...\nexport DATAHUB_TOKEN=...\n\n# Optional parameters\n# export DATAHUB_ENV=PROD\n# export DATAHUB_GITHUBORG=datahub-project\n# export DATAHUB_SLACKID=\n\n./gradlew publishSchema\n")))}u.isMDXComponent=!0}}]);