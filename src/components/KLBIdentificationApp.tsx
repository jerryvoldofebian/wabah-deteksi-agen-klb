import React, { useState, useMemo } from 'react';
import { Search, Filter, AlertTriangle, Clock, TestTube, Package, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { klbData, searchBySymptoms, filterByIncubationTime, filterByCategory, KLBData } from '@/data/klbData';

const KLBIdentificationApp = () => {
  const [searchSymptoms, setSearchSymptoms] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [minIncubation, setMinIncubation] = useState<string>('');
  const [maxIncubation, setMaxIncubation] = useState<string>('');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  // Extract symptoms from search input
  const symptomsList = useMemo(() => {
    return searchSymptoms
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);
  }, [searchSymptoms]);

  // Filter data based on search criteria
  const filteredData = useMemo(() => {
    let results = klbData;

    // Filter by symptoms
    if (symptomsList.length > 0) {
      results = searchBySymptoms(symptomsList);
    }

    // Filter by category
    if (selectedCategory) {
      results = filterByCategory(results, selectedCategory);
    }

    // Filter by incubation time
    const minMin = minIncubation ? parseInt(minIncubation) : undefined;
    const maxMin = maxIncubation ? parseInt(maxIncubation) : undefined;
    results = filterByIncubationTime(results, minMin, maxMin);

    return results;
  }, [symptomsList, selectedCategory, minIncubation, maxIncubation]);

  const toggleCardExpansion = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      bacterial: 'bg-red-100 text-red-800 border-red-200',
      viral: 'bg-purple-100 text-purple-800 border-purple-200',
      toxin: 'bg-orange-100 text-orange-800 border-orange-200',
      parasitic: 'bg-green-100 text-green-800 border-green-200',
      digestive: 'bg-blue-100 text-blue-800 border-blue-200',
      neural: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      respiratory: 'bg-teal-100 text-teal-800 border-teal-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      bacterial: 'Bakteri',
      viral: 'Virus',
      toxin: 'Toksin',
      parasitic: 'Parasit',
      digestive: 'Pencernaan',
      neural: 'Saraf',
      respiratory: 'Pernafasan'
    };
    return labels[category as keyof typeof labels] || category;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent to-background">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full mb-4 shadow-lg">
            <AlertTriangle className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Sistem Identifikasi KLB
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aplikasi bantu untuk petugas BPOM dan Dinas Kesehatan dalam mengidentifikasi 
            agen penyebab Kejadian Luar Biasa (KLB) berdasarkan gejala dan waktu inkubasi
          </p>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-6 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Search className="w-5 h-5" />
              Pencarian dan Filter
            </CardTitle>
            <CardDescription>
              Masukkan gejala yang diamati dan atur filter untuk mempersempit hasil pencarian
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Symptoms Search */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Gejala yang Diamati</label>
              <Input
                placeholder="Contoh: mual, muntah, diare, demam (pisahkan dengan koma)"
                value={searchSymptoms}
                onChange={(e) => setSearchSymptoms(e.target.value)}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Masukkan gejala yang terlihat, pisahkan dengan koma untuk multiple gejala
              </p>
            </div>

            {/* Filters Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Kategori Penyebab</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Semua kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Semua kategori</SelectItem>
                    <SelectItem value="bacterial">Bakteri</SelectItem>
                    <SelectItem value="viral">Virus</SelectItem>
                    <SelectItem value="toxin">Toksin</SelectItem>
                    <SelectItem value="parasitic">Parasit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Incubation Time Min */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Waktu Inkubasi Min (menit)</label>
                <Input
                  type="number"
                  placeholder="contoh: 30"
                  value={minIncubation}
                  onChange={(e) => setMinIncubation(e.target.value)}
                />
              </div>

              {/* Incubation Time Max */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Waktu Inkubasi Max (menit)</label>
                <Input
                  type="number"
                  placeholder="contoh: 1440"
                  value={maxIncubation}
                  onChange={(e) => setMaxIncubation(e.target.value)}
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center gap-2 pt-2">
              <Filter className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Ditemukan {filteredData.length} dari {klbData.length} kemungkinan penyebab
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="space-y-4">
          {filteredData.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <TestTube className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Tidak Ada Hasil</h3>
                <p className="text-muted-foreground">
                  Tidak ditemukan penyakit yang sesuai dengan kriteria pencarian. 
                  Coba ubah kata kunci atau filter pencarian.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredData.map((item) => (
              <Collapsible key={item.id} className="w-full">
                <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                  <CollapsibleTrigger 
                    className="w-full"
                    onClick={() => toggleCardExpansion(item.id)}
                  >
                    <CardHeader className="cursor-pointer hover:bg-accent/20 transition-colors rounded-t-lg">
                      <div className="flex items-start justify-between">
                        <div className="text-left flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-lg text-primary">
                              {item.penyakit}
                            </CardTitle>
                            <Badge className={getCategoryColor(item.kategori)}>
                              {getCategoryLabel(item.kategori)}
                            </Badge>
                          </div>
                          <CardDescription className="text-left">
                            <div className="flex items-center gap-4 text-sm">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {item.waktuInkubasi}
                              </span>
                              <span className="text-muted-foreground">
                                {item.penyebabEtiologi.substring(0, 80)}...
                              </span>
                            </div>
                          </CardDescription>
                        </div>
                        <div className="ml-4">
                          {expandedCards.has(item.id) ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <Separator className="mb-4" />
                      
                      <div className="space-y-4">
                        {/* Penyebab Etiologi */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <TestTube className="w-4 h-4 text-primary" />
                            Penyebab Etiologi
                          </h4>
                          <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                            {item.penyebabEtiologi}
                          </p>
                        </div>

                        {/* Tanda dan Gejala */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-warning" />
                            Tanda dan Gejala
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.tandaGejala.map((gejala, index) => (
                              <Badge 
                                key={index} 
                                variant="outline" 
                                className="bg-warning-light border-warning text-warning-foreground"
                              >
                                {gejala}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Pangan Terlibat */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Package className="w-4 h-4 text-secondary" />
                            Pangan yang Biasanya Terlibat
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.panganTerlibat.map((pangan, index) => (
                              <Badge 
                                key={index} 
                                variant="outline"
                                className="bg-secondary-light border-secondary text-secondary-foreground"
                              >
                                {pangan}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Sampel/Spesimen */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <TestTube className="w-4 h-4 text-primary" />
                            Sampel/Spesimen yang Dikumpulkan
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.sampelSpesimen.map((sampel, index) => (
                              <Badge 
                                key={index} 
                                variant="outline"
                                className="bg-primary-light border-primary text-primary-foreground"
                              >
                                {sampel}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Faktor Kontribusi */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Faktor yang Berkontribusi terhadap KLB
                          </h4>
                          <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                            {item.faktorKontribusi}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))
          )}
        </div>

        {/* Footer Info */}
        <Card className="mt-8 bg-accent/30 border-0">
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Aplikasi ini berdasarkan data tabel identifikasi KLB untuk membantu petugas BPOM dan Dinas Kesehatan. 
              Selalu konsultasikan dengan ahli epidemiologi untuk diagnosis yang akurat.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KLBIdentificationApp;