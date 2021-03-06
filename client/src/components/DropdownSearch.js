import React from 'react'
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import { padding } from '@mui/system';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
const DropdownSearch = () => {
   // const artifacts = require('../objects/artifacts.json')// TODO:do this later makes code not cringe and ugly
  //  const newArtifacts = JSON.parse(artifacts);

  return (
    
    <div>
        <Box sx={{ flexGrow: 1}} >
            <Grid container spacing ={2} padding={5}>

                <Grid item xs={2.2}>
                    <Autocomplete
                    disablePortal
                    id ="dropdown_search"
                    options={artifacts}
                    sx={{width:300}}
                    renderInput={(params) => <TextField {...params} label="Artifact" variant="standard"/>}
                    />
                </Grid>

                <Grid item xs={1}>
                    <TextField id="price_input" label="Price" variant="standard" />
                </Grid>

                <Grid item xs={2}>
                    <Button variant="contained">Submit</Button>
                </Grid>
                    
            </Grid>
        </Box>
    </div>
  )
}

const artifacts = [
{label:"Adept's Alluring Amulet", tier:4},
{label:"Adept's Alluring Bindings", tier:4},
{label:"Adept's Alluring Bolts", tier:4},
{label:"Adept's Alluring Crystal", tier:4},
{label:"Adept's Alluring Padding", tier:4},
{label:"Adept's Ancient Hammer Head", tier:4},
{label:"Adept's Augured Fasteners", tier:4},
{label:"Adept's Augured Padding", tier:4},
{label:"Adept's Augured Sash", tier:4},
{label:"Adept's Black Leather", tier:4},
{label:"Adept's Bloodforged Catalyst", tier:4},
{label:"Adept's Bloodforged Spikes", tier:4},
{label:"Adept's Bloodstained Antiquities", tier:4},
{label:"Adept's Broken Demonic Fang", tier:4},
{label:"Adept's Burning Orb", tier:4},
{label:"Adept's Carved Skull Padding", tier:4},
{label:"Adept's Chilled Crystalline Shard", tier:4},
{label:"Adept's Crushed Avalonian Heirloom", tier:4},
{label:"Adept's Crystallized Divinity", tier:4},
{label:"Adept's Crystallized Dread", tier:4},
{label:"Adept's Crystallized Magic", tier:4},
{label:"Adept's Crystallized Spirit", tier:4},
{label:"Adept's Cursed Barbs", tier:4},
{label:"Adept's Cursed Frozen Crystal", tier:4},
{label:"Adept's Cursed Jawbone", tier:4},
{label:"Adept's Demonhide Bindings", tier:4},
{label:"Adept's Demonhide Leather", tier:4},
{label:"Adept's Demonhide Padding", tier:4},
{label:"Adept's Demonic Arrowheads", tier:4},
{label:"Adept's Demonic Jawbone", tier:4},
{label:"Adept's Druidic Bindings", tier:4},
{label:"Adept's Druidic Feathers", tier:4},
{label:"Adept's Druidic Inscriptions", tier:4},
{label:"Adept's Druidic Preserved Beak", tier:4},
{label:"Adept's Ghastly Bindings", tier:4},
{label:"Adept's Ghastly Blades", tier:4},
{label:"Adept's Ghastly Candle", tier:4},
{label:"Adept's Ghastly Leather", tier:4},
{label:"Adept's Ghastly Scroll", tier:4},
{label:"Adept's Ghastly Visor", tier:4},
{label:"Adept's Hardened Debole", tier:4},
{label:"dept's Hellish Bolts", tier:4},
{label:"Adept's Hellish Handle", tier:4},
{label:"Adept's Hellish Sicklehead", tier:4},
{label:"Adept's Hellish Sicklehead Pair", tier:4},
{label:"Adept's Hoarfrost Orb", tier:4},
{label:"Adept's Humming Avalonian Whirligig", tier:4},
{label:"Adept's Icicle Orb", tier:4},
{label:"Adept's Imbued Leather Folds", tier:4},
{label:"Adept's Imbued Soles", tier:4},
{label:"Adept's Imbued Visor", tier:4},
{label:"Adept's Immaculately Crafted Riser", tier:4},
{label:"Adept's Infernal Cloth Bindings", tier:4},
{label:"ept's Infernal Cloth Folds", tier:4},
{label:"Adept's Infernal Cloth Visor", tier:4},
{label:"Adept's Infernal Harpoon Tip", tier:4},
{label:"Adept's Infernal Scroll", tier:4},
{label:"Adept's Inscribed Stone", tier:4},
{label:"Adept's Keeper Spearhead", tier:4},
{label:"Adept's Lost Arcane Crystal", tier:4},
{label:"Adept's Lost Cursed Crystal", tier:4},
{label:"Adept's Massive Metallic Hand", tier:4},
{label:"Adept's Possessed Scroll", tier:4},
{label:"Adept's Preserved Log", tier:4},
{label:"Adept's Preserved Rocks", tier:4},
{label:"Adept's Reinforced Morgana Pole", tier:4},
{label:"Adept's Ruined Ancestral Vamplate", tier:4},
{label:"Adept's Runed Horn", tier:4},
{label:"Adept's Runed Rock", tier:4},
{label:"Adept's Sanctified Belt", tier:4},
{label:"Adept's Sanctified Bindings", tier:4},
{label:"Adept's Sanctified Mask", tier:4},
{label:"Adept's Severed Celestial Keepsake", tier:4},
{label:"Adept's Shattered Avalonian Memento", tier:4},
{label:"Adept's Symbol of Blight", tier:4},
{label:"Adept's Timeworn Walking Staff", tier:4},
{label:"Adept's Unholy Scroll", tier:4},
{label:"Adept's Uprooted Perennial Sapling", tier:4},
{label:"Adept's Wildfire Orb", tier:4},
];

export default DropdownSearch