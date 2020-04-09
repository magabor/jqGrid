const lineTypeList =  JSON.parse('[{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"2Mb-Sync","LINE_TYPE_CODE":"2MB_SYNC"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"2Mhz-Sync","LINE_TYPE_CODE":"2MHZ_SYNC"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - 10Mbps Ethernet","LINE_TYPE_CODE":"ETH"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - 16Mbps","LINE_TYPE_CODE":"E16"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - 2XTS","LINE_TYPE_CODE":"2XTS"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - 6XTS","LINE_TYPE_CODE":"6XTS"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - 8Mbps","LINE_TYPE_CODE":"E8"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - 8XTS","LINE_TYPE_CODE":"8XTS"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - E1","LINE_TYPE_CODE":"E1"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - E2","LINE_TYPE_CODE":"E2"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - E3","LINE_TYPE_CODE":"E3"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - E4","LINE_TYPE_CODE":"E4"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - FE - 100Mbps Ethernet","LINE_TYPE_CODE":"FE"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - GE - 1Gbps Ethernet","LINE_TYPE_CODE":"GE"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - STM1","LINE_TYPE_CODE":"STM1_UC"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - STM1ch","LINE_TYPE_CODE":"STM1"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"Electrical - TS","LINE_TYPE_CODE":"DS0"},{"MEDIUM_TYPE":"Electrical","MEDIUM_TYPE_CODE":"ELECTRICAL","LINE_TYPE":"FastEthernet-Sync","LINE_TYPE_CODE":"FE_SYNC"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Dynamic Capacity - Full Packet Configuration","LINE_TYPE_CODE":"DYNAMIC_FULL_PACKET"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Dynamic Capacity - Hybrid Configuration","LINE_TYPE_CODE":"DYNAMIC_HYBRID"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 100Mbps Ethernet","LINE_TYPE_CODE":"100MBPS-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 10XE1","LINE_TYPE_CODE":"10-2-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 15XE1","LINE_TYPE_CODE":"15-2-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 16XE1","LINE_TYPE_CODE":"16-E1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 17XE1","LINE_TYPE_CODE":"17-E1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 1XE1","LINE_TYPE_CODE":"1XE1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 1xSTM1","LINE_TYPE_CODE":"STM1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 200Mbps Ethernet","LINE_TYPE_CODE":"200MBPS-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 22XE1","LINE_TYPE_CODE":"22XE1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 2XE1","LINE_TYPE_CODE":"2-E1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 2xSTM1","LINE_TYPE_CODE":"2XSTM1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 32XE1","LINE_TYPE_CODE":"32-2-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 35XE1","LINE_TYPE_CODE":"35-2-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 46XE1","LINE_TYPE_CODE":"46-E1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 4XE1","LINE_TYPE_CODE":"4-E1-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 50Mbps Ethernet","LINE_TYPE_CODE":"50MBPS-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 75XE1","LINE_TYPE_CODE":"75-2-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 80XE1","LINE_TYPE_CODE":"80-2-MW"},{"MEDIUM_TYPE":"Microwave","MEDIUM_TYPE_CODE":"MICROWAVE","LINE_TYPE":"Microwave - 8XE1","LINE_TYPE_CODE":"8-E1-MW"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"2.5GE - 2.5Gbps Ethernet","LINE_TYPE_CODE":"2.5XGE-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"FC-FICON-4G","LINE_TYPE_CODE":"FC-FICON-4G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"OUT-1","LINE_TYPE_CODE":"OUT-1"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"OUT-2","LINE_TYPE_CODE":"OUT-2"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"OUT-3","LINE_TYPE_CODE":"OUT-3"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 100GE - 100Gbps Ethernet","LINE_TYPE_CODE":"100XGE-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 10GE - 10Gbps Ethernet","LINE_TYPE_CODE":"10XGE-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 1xOTU1-ODU1","LINE_TYPE_CODE":"OTU1-ODU1"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 1xOTU2-ODUflex","LINE_TYPE_CODE":"OTU2-ODU_FLEX"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 40GE - 40Gbps Ethernet","LINE_TYPE_CODE":"40XGE-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 40XLAMBDA WDM Line","LINE_TYPE_CODE":"40XLAMBDA"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 50GE - 50Gbps Ethernet","LINE_TYPE_CODE":"50XGE-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 80XLAMBDA WDM Line","LINE_TYPE_CODE":"80XLAMBDA"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - 8XLAMBDA WDM Line","LINE_TYPE_CODE":"8XLAMBDA"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC10G","LINE_TYPE_CODE":"FC10G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC128G","LINE_TYPE_CODE":"FC128G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC16G","LINE_TYPE_CODE":"FC16G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC1G","LINE_TYPE_CODE":"FC1G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC2G","LINE_TYPE_CODE":"FC2G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC32G","LINE_TYPE_CODE":"FC32G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC4G","LINE_TYPE_CODE":"FC4G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FC8G","LINE_TYPE_CODE":"FC8G"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - FE - 100Mbps Ethernet","LINE_TYPE_CODE":"FE-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - GE - 1Gbps Ethernet","LINE_TYPE_CODE":"GE-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODU0","LINE_TYPE_CODE":"ODU0"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODU1","LINE_TYPE_CODE":"ODU1"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODU2","LINE_TYPE_CODE":"ODU2"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODU2E","LINE_TYPE_CODE":"ODU2E"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODU3","LINE_TYPE_CODE":"ODU3"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODU3E2","LINE_TYPE_CODE":"ODU3E2"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODU4","LINE_TYPE_CODE":"ODU4"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - ODUflex","LINE_TYPE_CODE":"ODU_FLEX"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU1-1xODUflex","LINE_TYPE_CODE":"OTU1-ODU_FLEX"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU1-2xODU0","LINE_TYPE_CODE":"OTU1-ODU0"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU2-1xODU2","LINE_TYPE_CODE":"OTU2-ODU2"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU2-4xODU1","LINE_TYPE_CODE":"OTU2-ODU1"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU2-8xODU0","LINE_TYPE_CODE":"OTU2-ODU0"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU2E-1xODU2E","LINE_TYPE_CODE":"OTU2E-ODU2E"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU2E-1xODUflex","LINE_TYPE_CODE":"OTU2E-ODU_FLEX"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3-16xODU1","LINE_TYPE_CODE":"OTU3-ODU1"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3-1xODU3","LINE_TYPE_CODE":"OTU3-ODU3"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3-1xODUflex","LINE_TYPE_CODE":"OTU3-ODU_FLEX"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3-32xODU0","LINE_TYPE_CODE":"OTU3-ODU0"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3-4xODU2","LINE_TYPE_CODE":"OTU3-ODU2"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3E2-1xODU3E2","LINE_TYPE_CODE":"OTU3E2-ODU3E2"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3E2-1xODUflex","LINE_TYPE_CODE":"OTU3E2-ODU_FLEX"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU3E2-4xODU2E","LINE_TYPE_CODE":"OTU3E2-ODU2E"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU4-10xODU2","LINE_TYPE_CODE":"OTU4-ODU2"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU4-2xODU3","LINE_TYPE_CODE":"OTU4-ODU3"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU4-40xODU1","LINE_TYPE_CODE":"OTU4-ODU1"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU4-80xODU0","LINE_TYPE_CODE":"OTU4-ODU0"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU4-ODU4","LINE_TYPE_CODE":"OTU4-ODU4"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - OTU4-ODUflex","LINE_TYPE_CODE":"OTU4-ODU_FLEX"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - STM1","LINE_TYPE_CODE":"STM1_OPT_UC"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"Optical - STM1ch","LINE_TYPE_CODE":"STM1-OPT"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"STM16","LINE_TYPE_CODE":"STM16CH"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"STM256","LINE_TYPE_CODE":"STM256CH"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"STM4","LINE_TYPE_CODE":"STM4CH"},{"MEDIUM_TYPE":"Optical","MEDIUM_TYPE_CODE":"OPTICAL","LINE_TYPE":"STM64","LINE_TYPE_CODE":"STM64CH"}]');
export {lineTypeList};